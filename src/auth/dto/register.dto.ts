import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Name must be a string' })
  readonly name: string;

  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  readonly password: string;
}
