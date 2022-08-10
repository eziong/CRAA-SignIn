import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schema/user';
import { UserDto } from './types';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getHello(): string {
    return 'hello world -auth';
  }

  async verifyUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email, password });
    if (user) return JSON.stringify(user); // user token
    return '';
  }

  async getUser(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async createUser({ email, password, name }: UserDto): Promise<User> {
    const user = await this.userModel.create({
      email,
      password,
      name,
    });
    return user;
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
