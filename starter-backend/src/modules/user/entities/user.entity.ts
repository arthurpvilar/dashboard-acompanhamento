// src/entities/user.entity.ts
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn('uuid')
  index: string;

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

  @BeforeInsert()
  generateUUID() {
    if (!this.index) {
      this.index = uuidv4();
    }
  }
}
