import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() body: LoginDto) {
    return body;
  }

  @Post('/register')
  createUser(@Body() body: RegisterDto) {
    return body;
  }

  @Get('/logout')
  logout() {
    return this.authService.logout();
  }
}
