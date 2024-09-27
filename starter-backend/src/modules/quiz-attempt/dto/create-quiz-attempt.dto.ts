// src/quiz-attempt/dto/create-quiz-attempt.dto.ts
import { IsOptional, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuizAttemptDto {
  @ApiPropertyOptional({ description: 'User ID (if registered)' })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional({ description: 'Email address (if unregistered)' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Quiz ID' })
  @IsNotEmpty()
  quizId: number;

  @ApiProperty({ description: 'Answers provided by the user' })
  @IsNotEmpty()
  answers: any;
}
