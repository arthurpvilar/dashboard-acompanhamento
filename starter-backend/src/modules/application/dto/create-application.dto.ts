import {
  IsNotEmpty,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateApplicationDto {
  @IsNotEmpty()
  @IsString()
  companyId: string;

  @IsNotEmpty()
  @IsNumber()
  jobId: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  candidateIds?: string[];

  @IsNotEmpty()
  @IsBoolean()
  like: boolean;

  @IsNotEmpty()
  @IsEnum(['Em Andamento', 'Cancelada', 'Finalizada'])
  status: 'Em Andamento' | 'Cancelada' | 'Finalizada';
}
