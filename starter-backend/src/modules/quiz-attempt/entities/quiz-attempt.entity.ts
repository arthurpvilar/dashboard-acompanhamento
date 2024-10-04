// src/quiz-attempt/entities/quiz-attempt.entity.ts
import { QuizQuestionAnswer } from '@App/modules/quiz-question-answer/entities/quiz-question-answer.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import { User } from '@App/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class QuizAttempt {
  @ApiProperty({
    description: 'ID único da tentativa',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  index: number;

  @ApiProperty({
    description: 'Quiz associado à tentativa',
    type: () => Quiz,
  })
  @ManyToOne(() => Quiz, (quiz) => quiz.attempts)
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;

  @ApiPropertyOptional({
    description: 'Usuário que fez a tentativa (se registrado)',
    type: () => User,
  })
  @ManyToOne(() => User, (user) => user.attempts, { nullable: true })
  @JoinColumn({ name: 'userId' })
  user: User | null;

  @ApiPropertyOptional({
    description: 'Email do usuário que fez a tentativa (se não registrado)',
    example: 'usuario@example.com',
  })
  @Column({ nullable: true })
  email: string | null;

  @ApiProperty({
    description: 'Respostas fornecidas na tentativa',
    type: () => [QuizQuestionAnswer],
  })
  @OneToMany(() => QuizQuestionAnswer, (answer) => answer.attempt, {
    cascade: true,
  })
  answers: QuizQuestionAnswer[];

  @ApiProperty({
    description: 'Indica se a tentativa foi concluída',
    default: false,
  })
  @Column({ default: false })
  isCompleted: boolean;

  @ApiProperty({
    description: 'Data e hora em que a tentativa foi iniciada',
    example: '2023-01-01T12:00:00Z',
  })
  @CreateDateColumn()
  attemptedAt: Date;

  @ApiPropertyOptional({
    description: 'Data e hora em que a tentativa foi concluída',
    example: '2023-01-01T12:30:00Z',
  })
  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date;
}
