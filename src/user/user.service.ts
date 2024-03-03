import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreateSessionDto } from './dtos/create-session.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOneByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }

  async findOneById(_id: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ _id });
  }

  async findUsersByUsername(username: string): Promise<UserDocument[] | null> {
    return this.userModel.find({ username });
  }

  async createUser(dto: CreateUserDto): Promise<UserDocument> {
    const { email, username, password } = dto;

    const currentUser = await this.findOneByEmail(email);
    if (currentUser) {
      throw new ConflictException('User with this email already exists');
    }

    const user = new this.userModel({ email, username, password });
    return user.save();
  }

  async updateUser(_id: string, update: Partial<User>): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(_id, update);
  }

  async createSession(dto: CreateSessionDto) {
    const { userId, browser, token } = dto;

    const user = await this.findOneById(userId);
    if (!user) {
      throw new ConflictException('User not found');
    }

    user.sessions.push({ browser, token, date: new Date() });
    return user.save();
  }

  async removeSession(userId: string, sessionId: string) {
    const user = await this.findOneById(userId);
    if (!user) {
      throw new ConflictException('User not found');
    }

    user.sessions = user.sessions.filter(
      (session) => session._id !== sessionId,
    );
    return user.save();
  }
}
