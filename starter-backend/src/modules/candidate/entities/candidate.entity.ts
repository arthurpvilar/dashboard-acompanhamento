import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { BigFiveData } from '@App/modules/bigfive/interface/bigfive.interface';
import { Application } from '@App/modules/application/entities/application.entity';

@Entity({ name: 'candidates' })
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, name: 'user_id' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @Column('simple-array', { nullable: true, name: 'bookmarked_jobs' })
  bookmarkedJobs: string[];

  @Column()
  @IsString()
  @IsNotEmpty()
  address_id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  bigFive: BigFiveData;

  @OneToMany(() => Application, (application) => application.candidate)
  applications: Application[];
}
