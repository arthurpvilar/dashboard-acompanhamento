// src/dto/record-attempt.dto.ts
import { IsOptional, IsEmail, IsNotEmpty, IsString, IsArray, IsNumber, ValidateNested, IsDate, Validate, ValidateIf } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UserOrEmailConstraint } from '@App/common/validators/UserOrEmailConstraint';

export class AnswerDto {
  @ApiProperty({ description: 'ID da pergunta', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @ApiPropertyOptional({ description: 'ID da opção selecionada', example: 2 })
  @IsOptional()
  @IsNumber()
  optionId?: number;

  @ApiPropertyOptional({ description: 'Data e hora de início', example: '2023-01-01T12:00:00Z' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startedAt?: Date;

  @ApiPropertyOptional({ description: 'Data e hora de conclusão', example: '2023-01-01T12:05:00Z' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  completedAt?: Date;
}

export class RecordAttemptDto {
  @ApiPropertyOptional({
    description: 'ID do usuário (se registrado)',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @IsOptional()
  @IsString()
  @ValidateIf(o => !o.email)
  userId?: string;

  @ApiPropertyOptional({
    description: 'Endereço de email (se não registrado)',
    example: 'usuario@example.com',
  })
  @IsOptional()
  @IsEmail()
  @ValidateIf(o => !o.userId)
  email?: string;

  @ApiProperty({
    description: 'ID do quiz que está sendo tentado',
    example: 42,
  })
  @IsNotEmpty()
  @IsNumber()
  quizId: number;

  @ApiProperty({
    description: 'Respostas fornecidas pelo usuário',
    type: [AnswerDto],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}