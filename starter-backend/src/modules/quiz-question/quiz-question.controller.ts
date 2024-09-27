// src/quiz-question/quiz-question.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { QuizQuestionService } from './quiz-question.service';
import { CreateQuizQuestionDto } from './dto/create-quiz-question.dto';
import { UpdateQuizQuestionDto } from './dto/update-quiz-question.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('quiz-questions')
@Controller('quiz-questions')
export class QuizQuestionController {
  constructor(private readonly quizQuestionService: QuizQuestionService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create a new quiz question' })
  @ApiResponse({
    status: 201,
    description: 'The quiz question has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateQuizQuestionDto })
  create(@Body() createQuizQuestionDto: CreateQuizQuestionDto) {
    return this.quizQuestionService.create(createQuizQuestionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quiz questions' })
  @ApiResponse({
    status: 200,
    description: 'Quiz questions retrieved successfully.',
  })
  findAll() {
    return this.quizQuestionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quiz question by ID' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizQuestion not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizQuestionService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update a quiz question' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizQuestion not found.' })
  @ApiBody({ type: UpdateQuizQuestionDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuizQuestionDto: UpdateQuizQuestionDto,
  ) {
    return this.quizQuestionService.update(id, updateQuizQuestionDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete a quiz question' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizQuestion not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.quizQuestionService.remove(id);
  }
}
