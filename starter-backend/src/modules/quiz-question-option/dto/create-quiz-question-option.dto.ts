import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';
import { QuizSociologicalOptionData } from '@App/modules/shared/types/quiz-social-option-data';
import { Type } from 'class-transformer';

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

  @ApiPropertyOptional({
    description: 'Sociological data with id and name for the option',
  })
  @ValidateNested({ each: true })
  @Type(() => QuizSociologicalOptionData)
  sociological?: QuizSociologicalOptionData;

  @ApiProperty({ description: 'ID of the sociological data' })
  @IsInt()
  sociologicalId: number;

  @ApiPropertyOptional({ description: 'Image URL for the option' })
  @ValidateNested()
  @IsOptional()
  image?: QuizImageData;
}
