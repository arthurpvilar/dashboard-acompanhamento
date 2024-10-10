// src/dto/quiz-attempt-details.dto.ts
import { QuizQuestionDto } from '@App/modules/quiz/dto/quiz-details.dto';
import { QuizStatisticalSociologicalDataDto } from '@App/modules/quiz/dto/quiz-statistical-sociological-data.dto';
import { QuizImageData } from '@App/shared/types/quiz-image-data.interface';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class QuizAttemptDetailsDto {
  @ApiProperty({ description: 'ID da tentativa de quiz' })
  attemptId: number;

  @ApiProperty({ description: 'Título do quiz' })
  quizTitle: string;

  @ApiProperty({ description: 'Descrição do quiz' })
  quizDescription: string;

  @ApiProperty({ description: 'Categoria do quiz' })
  quizCategory: string;

  @ApiPropertyOptional({ description: 'Dados da imagem do quiz' })
  @IsOptional()
  quizImage?: QuizImageData;

  @ApiProperty({ description: 'Nome do usuário que fez a tentativa do quiz' })
  quizOwnerFullName: string;

  @ApiProperty({
    description: 'Lista de perguntas e respostas da tentativa de quiz',
    type: [QuizQuestionDto],
  })
  questions: QuizQuestionDto[];

  @ApiProperty({
    description: 'Dados sociológicos relacionados à tentativa de quiz',
    type: [QuizStatisticalSociologicalDataDto],
  })
  sociologicalDataStatistics: QuizStatisticalSociologicalDataDto[];
}
