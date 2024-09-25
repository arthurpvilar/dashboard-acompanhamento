import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BigFiveData } from '@App/modules/bigfive/interface/bigfive.interface';
import { Application } from '@App/modules/application/entities/application.entity';
import { Company } from '@App/modules/company/entities/company.entity';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'company_id' })
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @Column('text')
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column('text')
  @IsString()
  @IsNotEmpty()
  activities: string;

  @Column('text')
  @IsString()
  benefits: string;

  @Column('decimal', { nullable: true, precision: 10, scale: 2 })
  @IsNumber()
  remuneration: number;

  @Column({
    name: 'contract_location',
    type: 'enum',
    enum: ['Remoto', 'Híbrido', 'Presencial'],
    default: 'Remoto',
  })
  contractLocation: 'Remoto' | 'Híbrido' | 'Presencial';

  @Column({ name: 'work_schedule' })
  @IsNumber()
  @IsNotEmpty()
  workSchedule: number;

  @Column({
    name: 'contract_model',
    type: 'enum',
    enum: ['Estágio', 'Bolsa', 'CLT', 'CNPJ'],
    default: 'CLT',
  })
  contractModel: 'Estágio' | 'Bolsa' | 'CLT' | 'CNPJ';

  @Column({ name: 'location_estate' })
  @IsString()
  @IsNotEmpty()
  locationEstate: string;

  @Column({ name: 'location_city' })
  @IsString()
  @IsNotEmpty()
  locationCity: string;

  @Column({ name: 'academic_degree' })
  @IsString()
  @IsNotEmpty()
  academicDegree: string;

  @Column({ name: 'field_of_expertise' })
  @IsString()
  @IsNotEmpty()
  fieldOfExpertise: string;

  @Column({ name: 'work_experience_time' })
  @IsNumber()
  workExperienceTime: number;

  @Column('simple-array', { nullable: true, name: 'technical_sills' })
  technicalSkills: string[];

  @Column('simple-array', { nullable: true, name: 'desired_skills' })
  desiredSkills: string[];

  @Column({ name: 'considered_differentiators' })
  @IsString()
  consideredDifferentiators: string;

  @Column({ type: 'timestamp' })
  @IsNotEmpty()
  startDate: Date;

  @Column({ type: 'timestamp' })
  @IsNotEmpty()
  endDate: Date;

  @Column({ name: 'need_previous_experience' })
  @IsNotEmpty()
  needPreviousExperience: boolean;

  @Column({ name: 'reallocation_needed' })
  @IsNotEmpty()
  reallocationNeeded: boolean;

  @Column()
  @IsString()
  @IsNotEmpty()
  bigFive: BigFiveData;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  stage: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  views: number;

  @Column({
    type: 'enum',
    enum: ['Open', 'Closed', 'Cancelled', 'Finished'],
    default: 'Open',
  })
  status: 'Open' | 'Closed' | 'Cancelled' | 'Finished';

  @ManyToOne(() => Company, (company) => company.jobs, { nullable: false })
  company: Company;

  @OneToMany(() => Application, (application) => application.job)
  applications: Application[];
}
