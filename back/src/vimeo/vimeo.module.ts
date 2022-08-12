import { Module } from '@nestjs/common';
import { VimeoController } from './vimeo.controller';
import { VimeoService } from './vimeo.service';

@Module({
  providers: [VimeoService],
  controllers: [VimeoController],
})
export class VimeoModule {}
