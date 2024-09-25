import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
} from 'class-validator';

export class UpdateApplicationDto {
  @IsOptional()
  @IsString()
  companyId?: string;

  @IsOptional()
  @IsString()
  jobId?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  candidateIds?: string[];

  @IsOptional()
  @IsBoolean()
  like?: boolean;

  @IsOptional()
  @IsEnum(['Em Andamento', 'Cancelada', 'Finalizada'])
  status?: 'Em Andamento' | 'Cancelada' | 'Finalizada';
}
