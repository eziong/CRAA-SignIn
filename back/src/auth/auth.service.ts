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

  async verifyUserWithToken(token: string, provider: string) {
    if (provider === 'google') {
      // verify google oauth token
      // const client = new OAuth2Client();
      return true;
    } else if (provider === 'local') {
      const result = this.jwtService.decode(token);
      if (result) return true;
    }
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
    console.log(user);
    return this.getUserToken(user);
  }

  async updateUser({ email, password, name }: UserDto) {
    return await this.userModel
      .findOneAndUpdate(
        { email },
        { $set: { email, password, name } },
        { new: true, upsert: false },
      )
      .then((data) => {
        console.log(data);
      });
  }

  async deleteUser(email: string) {
    return await this.userModel.findOneAndDelete({ email });
  }
}
