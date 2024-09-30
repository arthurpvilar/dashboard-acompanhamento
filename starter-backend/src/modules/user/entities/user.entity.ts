// src/entities/user.entity.ts
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column({ name: 'fullName' })
  @IsNotEmpty()
  fullName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Quiz, (quiz) => quiz.owner)
  quizzes: Quiz[];

  @OneToMany(() => QuizAttempt, (attempt) => attempt.user)
  attempts: QuizAttempt[];
}
