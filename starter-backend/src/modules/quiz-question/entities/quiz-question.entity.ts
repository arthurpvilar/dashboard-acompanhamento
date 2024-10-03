// src/entities/quiz-question.entity.ts
import { QuizQuestionOption } from '@App/modules/quiz-question-option/entities/quiz-question-option.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { QuizAudioData } from '@App/modules/shared/types/quiz-audio-data.interface';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';

@Entity()
export class QuizQuestion {
  @ApiProperty({
    description: 'ID único da pergunta',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  index: number;

  @ApiProperty({
    description: 'Tipo da pergunta (ex: múltipla escolha, verdadeiro/falso)',
    example: 'multiple-choice',
  })
  @Column()
  type: string;

  @ApiPropertyOptional({
    description: 'Texto da pergunta',
    example: 'Qual é a capital da França?',
  })
  @Column({ nullable: true })
  question: string;

  @ApiPropertyOptional({
    description: 'Resposta correta da pergunta',
    example: 'Paris',
  })
  @Column({ nullable: true })
  answer: string;

  @ApiPropertyOptional({
    description: 'Dados da imagem associados à pergunta',
    type: () => QuizImageData,
  })
  @Column({ type: 'jsonb', nullable: true })
  image: QuizImageData;

  @ApiPropertyOptional({
    description: 'Dados de áudio associados à pergunta',
    type: () => QuizAudioData,
  })
  @Column({ type: 'jsonb', nullable: true })
  audio: QuizAudioData;

  /*
  @ApiPropertyOptional({
    description: 'Pergunta pai, se esta for uma sub-pergunta',
    type: () => QuizQuestion,
  })
  @ManyToOne(() => QuizQuestion, (question) => question.subQuestions, {
    nullable: true,
  })
  @JoinColumn({ name: 'parentQuestionId' })
  parentQuestion: QuizQuestion;

  @ApiPropertyOptional({
    description: 'Sub-perguntas relacionadas a esta pergunta',
    type: [QuizQuestion],
  })
  @OneToMany(() => QuizQuestion, (question) => question.parentQuestion, {
    cascade: false,
  })
  subQuestions: QuizQuestion[];
  */

  @ApiPropertyOptional({
    description: 'Opções disponíveis para a pergunta',
    type: [QuizQuestionOption],
  })
  @OneToMany(() => QuizQuestionOption, (option) => option.question, {
    cascade: true,
  })
  options: QuizQuestionOption[];

  @ApiProperty({
    description: 'Quiz ao qual esta pergunta pertence',
    type: () => Quiz,
  })
  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    cascade: false,
  })
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;
}
