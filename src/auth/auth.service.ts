import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'Matias inició sesión';
  }
  register() {
    return 'Matias inició sesión';
  }
  logout() {
    return 'User logged out';
  }
}
