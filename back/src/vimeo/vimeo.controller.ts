import { Controller, Get, Param } from '@nestjs/common';

import { VimeoService } from './vimeo.service';

@Controller('vimeo')
export class VimeoController {
  constructor(private readonly vimeoService: VimeoService) {}

  @Get('/:videoId')
  test(@Param() { videoId }: { videoId: string }) {
    return this.vimeoService.getSrtArray(videoId);
  }
}
