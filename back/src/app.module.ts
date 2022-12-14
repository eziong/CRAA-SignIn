import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VimeoModule } from './vimeo/vimeo.module';

const mongodbURL =
  'mongodb+srv://test:Gl0TdjEMGxXGEyBx@craa.3gzq651.mongodb.net/Assignment?retryWrites=true&w=majority';
@Module({
  imports: [AuthModule, MongooseModule.forRoot(mongodbURL), VimeoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
