import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SimplifiedQuizListDto {
  @ApiProperty({ description: 'ID do quiz' })
  @IsNumber()
  index: number;

  @ApiProperty({ description: 'Título do quiz' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Identificador do quiz' })
  @IsString()
  identifier: string;

  @ApiProperty({ description: 'Porcentagem de conclusão' })
  @IsNumber()
  completion_rate: number;

  @ApiProperty({ description: 'Total de tentativas realizadas pelos usuários' })
  @IsNumber()
  total_attempts: number;

  @ApiProperty({ description: 'Nome do criado do quiz' })
  @IsString()
  owner_name: string;
}