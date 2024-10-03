// src/quiz-question-answer/entities/quiz-question-answer.entity.ts
import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestionOption } from '@App/modules/quiz-question-option/entities/quiz-question-option.entity';
import { QuizQuestion } from '@App/modules/quiz-question/entities/quiz-question.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class QuizQuestionAnswer {
  @ApiProperty({ description: 'ID único da resposta', example: 1 })
  @PrimaryGeneratedColumn()
  index: number;

  @ApiProperty({ description: 'Tentativa associada' })
  @ManyToOne(() => QuizAttempt, (attempt) => attempt.answers)
  @JoinColumn({ name: 'attemptId' })
  attempt: QuizAttempt;

  @ApiProperty({ description: 'Pergunta respondida' })
  @ManyToOne(() => QuizQuestion, { nullable: false })
  @JoinColumn({ name: 'questionId' })
  question: QuizQuestion;

  @ApiProperty({ description: 'Opção selecionada', required: false })
  @ManyToOne(() => QuizQuestionOption, { nullable: true })
  @JoinColumn({ name: 'optionId' })
  option: QuizQuestionOption;

  @ApiProperty({ description: 'Data e hora de início', required: false })
  @Column({ type: 'timestamp', nullable: true })
  startedAt: Date;

  @ApiProperty({ description: 'Data e hora de conclusão', required: false })
  @Column({ type: 'timestamp', nullable: true })
  completedAt: Date;
}
