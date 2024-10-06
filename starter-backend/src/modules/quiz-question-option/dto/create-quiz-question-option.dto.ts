import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { QuizImageData } from '@App/shared/types/quiz-image-data.interface';
import { QuizSociologicalOptionData } from '@App/shared/types/quiz-social-option-data';
import { Type } from 'class-transformer';

export class CreateQuizQuestionOptionDto {
  @ApiProperty({
    description: 'Título da opção',
    example: 'Opção A',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Indica se a opção está marcada por padrão',
    default: false,
  })
  @IsBoolean()
  isChecked: boolean;

  @ApiPropertyOptional({
    description: 'Peso da opção na pontuação',
    example: 10,
  })
  @IsNumber()
  weight: number;

  @ApiProperty({
    description: 'ID dos dados sociológicos associados',
    example: 5,
  })
  @IsInt()
  sociologicalId: number;

  @ApiPropertyOptional({
    description: 'Dados sociológicos associados à opção',
    type: () => QuizSociologicalOptionData,
  })
  @ValidateNested()
  @Type(() => QuizSociologicalOptionData)
  @IsOptional()
  sociological?: QuizSociologicalOptionData;

  @ApiPropertyOptional({
    description: 'Dados da imagem para a opção',
    type: () => QuizImageData,
  })
  @ValidateNested()
  @Type(() => QuizImageData)
  @IsOptional()
  image?: QuizImageData;
}
