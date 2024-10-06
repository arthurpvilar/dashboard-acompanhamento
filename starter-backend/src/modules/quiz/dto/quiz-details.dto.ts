// src/quiz/dto/quiz-details.dto.ts

import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { QuizStatisticalSociologicalDataDto } from './quiz-statistical-sociological-data.dto';
import { QuizImageData } from '@App/shared/types/quiz-image-data.interface';
import { QuizAudioData } from '@App/shared/types/quiz-audio-data.interface';

// Novo DTO para os dados sociológicos
export class QuizSociologicalDataDto {
  @ApiProperty({ description: 'ID do dado sociológico' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Nome do dado sociológico' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Cor associada ao dado sociológico' })
  @IsString()
  color: string;
}

// Novo DTO para as opções das perguntas
export class QuizQuestionOptionDto {
  @ApiProperty({ description: 'ID da opção' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Título da opção' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Indica se a opção está marcada como correta' })
  @IsBoolean()
  isChecked: boolean;

  @ApiProperty({ description: 'Peso da opção' })
  @IsNumber()
  weight: number;

  @ApiPropertyOptional({ description: 'Dados da imagem da opção' })
  @IsOptional()
  image?: QuizImageData;

  @ApiPropertyOptional({
    description: 'Dados sociológicos associados à opção',
    type: QuizSociologicalDataDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => QuizSociologicalDataDto)
  sociologicalData?: QuizSociologicalDataDto;
}

// Novo DTO para as perguntas
export class QuizQuestionDto {
  @ApiProperty({ description: 'ID da pergunta' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Tipo da pergunta' })
  @IsString()
  type: string;

  @ApiPropertyOptional({ description: 'Texto da pergunta' })
  @IsOptional()
  @IsString()
  question?: string;

  @ApiPropertyOptional({ description: 'Resposta da pergunta' })
  @IsOptional()
  @IsString()
  answer?: string;

  @ApiPropertyOptional({ description: 'Dados da imagem da pergunta' })
  @IsOptional()
  image?: QuizImageData;

  @ApiPropertyOptional({ description: 'Dados de áudio da pergunta' })
  @IsOptional()
  audio?: QuizAudioData;

  @ApiPropertyOptional({
    description: 'Opções da pergunta',
    type: [QuizQuestionOptionDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuizQuestionOptionDto)
  options?: QuizQuestionOptionDto[];
}

export class QuizDetailsDto {
  @ApiProperty({ description: 'ID do quiz' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Título do quiz' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Identificador do quiz' })
  @IsString()
  identifier: string;

  @ApiPropertyOptional({ description: 'Descrição do quiz' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Categoria do quiz' })
  @IsString()
  category: string;

  @ApiPropertyOptional({ description: 'Imagem do quiz' })
  @IsOptional()
  image?: QuizImageData;

  @ApiPropertyOptional({ description: 'Áudio do quiz' })
  @IsOptional()
  audio?: QuizAudioData;

  @ApiProperty({
    description: 'Dados estatísticos sociológicos do quiz',
    type: [QuizStatisticalSociologicalDataDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuizStatisticalSociologicalDataDto)
  sociologicalDataStatistics: QuizStatisticalSociologicalDataDto[];

  @ApiProperty({ description: 'Número total de tentativas' })
  @IsNumber()
  totalAttempts: number;

  @ApiProperty({ description: 'Média de peso das respostas' })
  @IsNumber()
  averageWeight: number;

  @ApiProperty({
    description: 'Percentual de tentativas concluídas',
  })
  @IsNumber()
  completionRate: number;

  @ApiProperty({
    description: 'Tempo médio de conclusão do quiz em milissegundos',
  })
  @IsNumber()
  averageCompletionTime: number;

  // Adicionando as perguntas ao DTO
  @ApiProperty({
    description: 'Perguntas do quiz',
    type: [QuizQuestionDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuizQuestionDto)
  questions: QuizQuestionDto[];

  @ApiPropertyOptional({ description: 'Dono do quiz' })
  @IsOptional()
  @IsString()
  @Type(() => QuizUserDetailsDto)
  owner?: QuizUserDetailsDto;
}

export class QuizUserDetailsDto {
  @ApiProperty({ description: 'Identificador do usuário' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Email do usuário' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Username do usuário' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Nome  completo do usuário' })
  @IsString()
  fullName: string;
}
