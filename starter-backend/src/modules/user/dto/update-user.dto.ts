// src/user/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ description: 'Password', example: 'newpassword' })
  password?: string;
}
