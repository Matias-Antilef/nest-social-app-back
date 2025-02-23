import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post('/login')
  // login() {
  //   return ;
  // }

  @Post('/register')
  createUser(@Body() body: RegisterDto) {
    console.log(body);
    return Body;
  }

  @Get('/logout')
  logout() {
    return this.authService.login();
  }
}
