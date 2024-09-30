// src/controllers/quiz.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  BadRequestException,
  Patch,
} from '@nestjs/common';
import { RecordAttemptDto } from '../quiz-attempt/dto/record-attempt.dto';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizService } from './quiz.service';
import { UpdateQuizOwnerDto } from './dto/update-quiz-owner.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('quizzes')
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('status') status?: 'draft' | 'published' | 'archived',
  ) {
    return this.quizService.findAll({
      page: Number(page),
      limit: Number(limit),
      search,
      status,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuizDto: UpdateQuizDto,
  ) {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.remove(id);
  }

  @Get('owner/:ownerId')
  findByOwner(@Param('ownerId') ownerId: string) {
    return this.quizService.findByOwner(ownerId);
  }

  @Patch('owner/:quizId')
  async updateOwner(
    @Param('quizId') quizId: number,
    @Body() updateQuizOwnerDto: UpdateQuizOwnerDto,
  ) {
    return this.quizService.updateQuizOwner(quizId, updateQuizOwnerDto);
  }

  @Post(':id/attempt')
  async recordAttempt(
    @Param('id', ParseIntPipe) id: number,
    @Body() attemptDto: RecordAttemptDto,
  ) {
    if (!attemptDto.userId && !attemptDto.email) {
      throw new BadRequestException('Either userId or email must be provided');
    }
    return this.quizService.recordAttempt(
      attemptDto.userId || null,
      attemptDto.email || null,
      id,
      attemptDto.answers,
    );
  }
}
