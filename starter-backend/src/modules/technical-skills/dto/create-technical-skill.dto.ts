import { IsNotEmpty, Length } from 'class-validator';

export class CreateTechnicalSkillDto {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;
}
