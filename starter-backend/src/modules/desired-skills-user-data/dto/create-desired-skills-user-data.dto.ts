import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateDesiredSkillUserDataDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  desiredSkillId: number;

  @IsEnum(['Básico', 'Intermediário', 'Avançado'])
  desiredData: 'Básico' | 'Intermediário' | 'Avançado';
}
