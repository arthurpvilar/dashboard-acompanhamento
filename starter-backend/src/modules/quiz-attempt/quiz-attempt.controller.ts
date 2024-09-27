import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { QuizAttemptService } from './quiz-attempt.service';
import { CreateQuizAttemptDto } from './dto/create-quiz-attempt.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('quiz-attempts')
@Controller('quiz-attempts')
export class QuizAttemptController {
  constructor(private readonly quizAttemptService: QuizAttemptService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quiz attempt' })
  @ApiResponse({
    status: 201,
    description: 'The quiz attempt has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateQuizAttemptDto })
  async create(@Body() createQuizAttemptDto: CreateQuizAttemptDto) {
    return this.quizAttemptService.createAttempt(createQuizAttemptDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get all quiz attempts' })
  @ApiResponse({
    status: 200,
    description: 'Quiz attempts retrieved successfully.',
  })
  findAll() {
    return this.quizAttemptService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get a quiz attempt by ID' })
  @ApiResponse({
    status: 200,
    description: 'Quiz attempt retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'QuizAttempt not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizAttemptService.findOne(id);
  }
}
