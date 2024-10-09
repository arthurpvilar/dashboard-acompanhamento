import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { QuizAttemptService } from './quiz-attempt.service';
import { RecordAttemptDto } from './dto/record-attempt.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QuizAttempt } from './entities/quiz-attempt.entity';
import { UserQuizAttemptDto } from './dto/user-quiz-attempt.dto';

@ApiTags('Quiz Attempts')
@Controller('quiz-attempts')
export class QuizAttemptController {
  constructor(private readonly quizAttemptService: QuizAttemptService) {}

  @Post('record')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Registrar uma tentativa de quiz' })
  @ApiResponse({
    status: 201,
    description: 'A tentativa de quiz foi registrada com sucesso.',
    type: QuizAttempt,
  })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  async recordAttempt(
    @Body() recordAttemptDto: RecordAttemptDto,
  ): Promise<QuizAttempt> {
    const { userId, email, quizId, answers } = recordAttemptDto;
    return await this.quizAttemptService.recordAttempt(
      userId,
      email,
      quizId,
      answers,
    );
  }

  @Get('recover')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Recuperar tentativa de quiz incompleta' })
  @ApiResponse({
    status: 200,
    description: 'Tentativa de quiz recuperada com sucesso.',
  })
  findAttempt(
    @Query('quizId', ParseIntPipe) quizId: number,
    @Query('userId') userId?: string,
    @Query('email') email?: string,
  ): Promise<QuizAttempt> {
    return this.quizAttemptService.findAttempt(quizId, userId, email);
  }

  @Get(':quizId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obter todas as tentativas de quiz' })
  @ApiResponse({
    status: 200,
    description: 'Tentativas de quiz recuperadas com sucesso.',
    type: [QuizAttempt],
  })
  findAll() {
    return this.quizAttemptService.findAll();
  }

  @Get('user-attempts/:userId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obter todas as tentativas de quiz de um usuário' })
  @ApiResponse({
    status: 200,
    description: 'Tentativas de quiz do usuário recuperadas com sucesso.',
    type: [QuizAttempt],
  })
  async getUserAttempts(
    @Param('userId') userId: string,
  ): Promise<UserQuizAttemptDto[]> {
    return this.quizAttemptService.getUserAttempts(userId);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Obter uma tentativa de quiz pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Tentativa de quiz recuperada com sucesso.',
    type: QuizAttempt,
  })
  @ApiResponse({
    status: 404,
    description: 'Tentativa de quiz não encontrada.',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizAttemptService.findOne(id);
  }
}
