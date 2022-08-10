import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schema/user';
import { UserDto } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  getHello(): string {
    return 'hello world -auth';
  }

  getUserToken(user: User) {
    return this.jwtService.sign(JSON.parse(JSON.stringify(user)));
  }

  async verifyUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email, password });
    if (user) return this.getUserToken(user); //JSON.stringify(user); // user token
    return '';
  }

  async verifyUserWithToken(token: string) {
    const result = this.jwtService.decode(token);
    console.log('result', result);
    if (result) return true;
    return false;
  }

  async getUser(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async createUser({ email, password, name }: UserDto): Promise<string> {
    const user = await this.userModel.create({
      email,
      password,
      name,
    });
    return this.getUserToken(user);
  }

  async updateUser({ email, password, name }: UserDto) {
    return await this.userModel
      .findOneAndUpdate(
        { email },
        { $set: { email, password, name } },
        { new: true },
      )
      .then((data) => {
        console.log(data);
      });
  }

  async deleteUser(email: string) {
    return await this.userModel.findOneAndDelete({ email });
  }
}
