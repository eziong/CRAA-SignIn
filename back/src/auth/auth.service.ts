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
    return this.userModel.findOne({ email, password });
  }

  async getUser(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async createUser({ email, password, name }: UserDto): Promise<User> {
    const user = this.userModel.create({
      email,
      password,
      name,
    });
    return user;
  }

  async updateUser({ email, password, name }: UserDto) {
    return this.userModel
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
    return this.userModel.findOneAndDelete({ email });
  }
}
