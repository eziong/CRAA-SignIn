import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { User } from 'schema/user';
import { UserDto } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Get('users/:email')
  getUser(@Param() { email }): Promise<User> {
    return this.authService.getUser(email);
  }

  @Post('users/create')
  createUser(@Body() userInfo: UserDto) {
    return this.authService.createUser(userInfo);
  }

  @Put('users/modify')
  changePassword(@Body() userInfo: UserDto) {
    return this.authService.changePassword(userInfo);
  }

  @Delete('users/:email/delete')
  deleteUser(@Param() { email }) {
    return this.authService.deleteUser(email);
  }
}
