import * as path from 'path';

import { createReadStream, readFile } from 'fs';

import { Injectable } from '@nestjs/common';
import { SubtitleLineType } from './types';

@Injectable()
export class VimeoService {
  async getSrtArray(filePath: string): Promise<SubtitleLineType[]> {
    return this.getDataFromFilePromise('en/demo.srt').then((subtitleText) =>
      this.convertSubtitleToArray(subtitleText),
    );
  }

  convertSubtitleToArray(subtitle: string) {
    const arr = [];
    let tmp = {} as SubtitleLineType;
    subtitle.split('\n').forEach((line, idx) => {
      switch (idx % 4) {
        case 0: {
          break;
        }
        case 1: {
          const [startTime, endTime] = line.split(' --> ');
          tmp.startTime = startTime;
          tmp.endTime = endTime;
          break;
        }
        case 2: {
          tmp.content = line;
          break;
        }
        case 3: {
          arr.push(tmp);
          tmp = {};
          break;
        }
        default: {
          tmp = {};
          break;
        }
      }
    });
    return arr;
  }

  getDataFromFilePromise(filePath: string) {
    return new Promise<string>(function (resolve, reject) {
      readFile(
        path.resolve(__dirname, `../../srt/${filePath}`),
        'utf-8',
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        },
      );
    });
  }
}
