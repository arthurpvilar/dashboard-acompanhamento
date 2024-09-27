// src/dto/record-attempt.dto.ts
import { IsOptional, IsEmail, IsNotEmpty } from 'class-validator';

export class RecordAttemptDto {
  @IsOptional()
  userId?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  answers: any;
}
