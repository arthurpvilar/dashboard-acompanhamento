import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email ou usuário' })
  email_or_username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Senha do usuário' })
  password: string;
}
