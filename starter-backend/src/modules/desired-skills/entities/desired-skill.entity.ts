import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('desired_skills')
export class DesiredSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  name: string;
}
