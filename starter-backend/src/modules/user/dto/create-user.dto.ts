// src/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole, UserStatus } from '../entities/user.entity';

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

  @ApiProperty({ description: 'Avatar index', example: '1' })
  @IsNotEmpty()
  @IsEmail()
  avatar: string;

  @ApiProperty({ description: 'User role' })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({ description: 'Password', example: 'strongpassword' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'User status' })
  @IsEnum(UserStatus)
  status: UserStatus;
}
