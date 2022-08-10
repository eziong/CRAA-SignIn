import { User, UserSchema } from 'schema/user';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'mySecretKey',
      // signOptions: { algorithm: 'ES256', expiresIn: '2 days' }, // 1hour
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
