import { IsDate, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsDate()
  readonly createdAt: Date;
}
