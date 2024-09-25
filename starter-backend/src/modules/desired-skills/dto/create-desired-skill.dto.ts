import { IsNotEmpty, Length } from 'class-validator';

export class CreateDesiredSkillDto {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;
}
