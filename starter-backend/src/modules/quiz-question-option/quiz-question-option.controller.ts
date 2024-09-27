// src/quiz-question-option/quiz-question-option.controller.ts
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
import { QuizQuestionOptionService } from './quiz-question-option.service';
import { CreateQuizQuestionOptionDto } from './dto/create-quiz-question-option.dto';
import { UpdateQuizQuestionOptionDto } from './dto/update-quiz-question-option.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('quiz-question-options')
@Controller('quiz-question-options')
export class QuizQuestionOptionController {
  constructor(
    private readonly quizQuestionOptionService: QuizQuestionOptionService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create a new quiz question option' })
  @ApiResponse({
    status: 201,
    description: 'The quiz question option has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateQuizQuestionOptionDto })
  create(@Body() createDto: CreateQuizQuestionOptionDto) {
    return this.quizQuestionOptionService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quiz question options' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question options retrieved successfully.',
  })
  findAll() {
    return this.quizQuestionOptionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quiz question option by ID' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question option retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizQuestionOption not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizQuestionOptionService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update a quiz question option' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question option updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizQuestionOption not found.' })
  @ApiBody({ type: UpdateQuizQuestionOptionDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateQuizQuestionOptionDto,
  ) {
    return this.quizQuestionOptionService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete a quiz question option' })
  @ApiResponse({
    status: 200,
    description: 'Quiz question option deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizQuestionOption not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.quizQuestionOptionService.remove(id);
  }
}
