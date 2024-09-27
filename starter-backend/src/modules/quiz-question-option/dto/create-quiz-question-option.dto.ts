import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';

export class CreateQuizQuestionOptionDto {
  @ApiProperty({ description: 'Title of the option' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Whether the option is checked by default' })
  @IsBoolean()
  isChecked: boolean;

  @ApiPropertyOptional({ description: 'Weight of the option in scoring' })
  @IsOptional()
  @IsNumber()
  weight?: number;

  @ApiPropertyOptional({ description: 'ID of the sociological data' })
  @IsOptional()
  @IsNumber()
  sociologicalId?: number;

  @ApiPropertyOptional({ description: 'Image URL for the option' })
  @ValidateNested()
  @IsOptional()
  image?: QuizImageData;

  @ApiPropertyOptional({ description: 'Question ID' })
  @IsOptional()
  @IsNumber()
  questionId?: number;
}
