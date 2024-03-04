import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dtos/register.dto';
import { User } from 'src/user/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { EPasswordConfigKey } from 'src/config/password.config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async register(dto: RegisterDto): Promise<User> {
    const { email, username, password } = dto;

    const passwordRound = await this.configService.get(
      EPasswordConfigKey.Rounds,
    );

    const hashedPassword = await bcrypt.hash(password, passwordRound);

    const user = await this.userService.createUser({
      email,
      username,
      password: hashedPassword,
    });

    return user;
  }
}
