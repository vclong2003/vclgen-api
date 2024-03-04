import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { STRATEGY_NAME } from './strategies/local.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    await this.authService.register(dto);
    return 'ok';
  }

  @UseGuards(AuthGuard(STRATEGY_NAME))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
