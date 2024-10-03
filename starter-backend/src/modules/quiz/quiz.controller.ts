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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('quizzes')
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Items per page',
    example: 10,
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search term',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['draft', 'published', 'archived'],
    description: 'Quiz status filter',
  })
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('search') search?: string,
    @Query('status') status?: 'draft' | 'published' | 'archived',
  ) {
    const parsedPage = Number(page);
    const parsedLimit = Number(limit);

    return this.quizService.findAll({
      page: isNaN(parsedPage) ? 1 : parsedPage,
      limit: isNaN(parsedLimit) ? 10 : parsedLimit,
      search,
      status,
    });
  }

  @ApiOperation({ summary: 'Find the latest quiz' })
  @ApiResponse({ status: 200, description: 'Returns the latest quiz.' })
  @ApiResponse({ status: 404, description: 'Quiz not found.' })
  @Get('latest')
  findLatestQuiz() {
    return this.quizService.findLatestQuiz();
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
}
