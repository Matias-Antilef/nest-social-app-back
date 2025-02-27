import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  password: string;
}
