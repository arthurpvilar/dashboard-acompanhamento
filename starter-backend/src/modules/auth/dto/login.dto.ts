// src/auth/dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email or username' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'User password' })
  password: string;
}
