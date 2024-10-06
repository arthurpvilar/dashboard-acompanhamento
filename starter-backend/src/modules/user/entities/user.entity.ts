// src/entities/user.entity.ts
import {
  Entity,
  Column,
  OneToMany,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import { v4 as uuidv4 } from 'uuid';

// Definindo os valores permitidos para o campo 'role'
export enum UserRole {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
  ADMINISTRATOR = 'Administrator',
}

// Definindo os valores permitidos para o campo 'status'
export enum UserStatus {
  ATIVO = 'Ativo',
  PENDENTE = 'Pendente',
  INATIVO = 'Inativo',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  index: string;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  fullName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @IsEmail()
  avatar?: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @OneToMany(() => Quiz, (quiz) => quiz.owner)
  quizzes: Quiz[];

  @OneToMany(() => QuizAttempt, (attempt) => attempt.user)
  attempts: QuizAttempt[];

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ATIVO,
  })
  @IsEnum(UserStatus)
  status: UserStatus;

  @BeforeInsert()
  generateUUID() {
    if (!this.index) {
      this.index = uuidv4();
    }
  }
}
