// src/entities/quiz-question.entity.ts
import { QuizQuestionOption } from '@App/modules/quiz-question-option/entities/quiz-question-option.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import { QuizAudioData } from '@App/modules/shared/types/quiz-audio-data.interface';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class QuizQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ nullable: true })
  question: string;

  @Column({ nullable: true })
  answer: string;

  @Column({ type: 'jsonb', nullable: true })
  image: QuizImageData;

  @Column({ type: 'jsonb', nullable: true })
  audio: QuizAudioData;

  @ManyToOne(() => QuizQuestion, (question) => question.subQuestions, {
    nullable: true,
  })
  @JoinColumn({ name: 'parentQuestionId' })
  parentQuestion: QuizQuestion;

  @OneToMany(() => QuizQuestion, (question) => question.parentQuestion, {
    cascade: true,
  })
  subQuestions: QuizQuestion[];

  @OneToMany(() => QuizQuestionOption, (option) => option.question, {
    cascade: true,
  })
  options: QuizQuestionOption[];

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;
}
