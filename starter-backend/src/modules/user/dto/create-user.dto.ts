// src/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Username', example: 'john_doe' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'Full name', example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'Email address', example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password', example: 'strongpassword' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
