import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome completo do usuário' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'CPF ou CNPJ do usuário' })
  @IsNotEmpty()
  @IsString()
  cpfOrCnpj: string;

  @ApiProperty({ description: 'Gênero do usuário' })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({ description: 'E-mail do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Nome de usuário do usuário' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Senha do usuário', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Número de celular do usuário',
    example: '+5511987654321',
  })
  @IsMobilePhone('pt-BR')
  mobilePhone: string;
}
