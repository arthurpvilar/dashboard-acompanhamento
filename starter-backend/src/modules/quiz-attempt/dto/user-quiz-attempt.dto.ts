import { QuizImageData } from '@App/shared/types/quiz-image-data.interface';
import { ApiProperty } from '@nestjs/swagger';

export class UserQuizAttemptDto {
  @ApiProperty({
    description: 'Index da tentativa de quiz',
    example: 1,
  })
  index: number;

  @ApiProperty({
    description: 'ID do quiz associado à tentativa',
    example: 42,
  })
  quizId: number;

  @ApiProperty({
    description: 'Título do quiz',
    example: 'Quiz de Matemática Básica',
  })
  quizTitle: string;

  @ApiProperty({
    description: 'Categoria do quiz',
    example: 'Matemática',
  })
  quizCategory: string;

  @ApiProperty({
    description: 'Identificador do quiz',
    example: 'MATH-001',
  })
  quizIdentifier: string;

  @ApiProperty({
    description: 'Descrição do quiz',
  })
  quizDescription: string;

  @ApiProperty({
    description: 'Imagem do quiz',
    example: 'https://example.com/image.jpg',
  })
  quizImage: QuizImageData;

  @ApiProperty({
    description: 'Indicador de tentativa completa',
    example: 'true',
  })
  isCompleted: boolean;

  @ApiProperty({
    description: 'Total de questões respondidas pelo usuário',
    example: 12,
  })
  answeredQuestions: number;

  @ApiProperty({
    description: 'Total de questões a serem respondidas',
    example: 26,
  })
  totalQuestions: number;

  @ApiProperty({
    description: 'Porcentagem de conclusão da tentativa de quiz',
    example: 75.5,
  })
  completionRate: number;
}