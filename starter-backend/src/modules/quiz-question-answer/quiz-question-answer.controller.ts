// src/quiz-question-answer/quiz-question-answer.controller.ts
import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizQuestionAnswerService } from './quiz-question-answer.service';
import { CreateQuizQuestionAnswerDto } from './dto/create-quiz-question-answer.dto';
import { UpdateQuizQuestionAnswerDto } from './dto/update-quiz-question-answer.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { QuizQuestionAnswer } from './entities/quiz-question-answer.entity';

@ApiTags('Quiz Question Answers')
@Controller('quiz-question-answers')
export class QuizQuestionAnswerController {
  constructor(
    private readonly quizQuestionAnswerService: QuizQuestionAnswerService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Cria uma nova resposta de pergunta do quiz' })
  @ApiResponse({
    status: 201,
    description: 'A resposta foi criada com sucesso.',
    type: QuizQuestionAnswer,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(
    @Body() createDto: CreateQuizQuestionAnswerDto,
  ): Promise<QuizQuestionAnswer> {
    return await this.quizQuestionAnswerService.create(createDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Atualiza uma resposta existente' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da resposta a ser atualizada' })
  @ApiResponse({
    status: 200,
    description: 'A resposta foi atualizada com sucesso.',
    type: QuizQuestionAnswer,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 404, description: 'Resposta não encontrada.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateQuizQuestionAnswerDto,
  ): Promise<QuizQuestionAnswer> {
    return await this.quizQuestionAnswerService.update(id, updateDto);
  }
}
