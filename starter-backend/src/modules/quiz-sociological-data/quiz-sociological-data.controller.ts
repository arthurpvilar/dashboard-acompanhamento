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
import { QuizSociologicalDataService } from './quiz-sociological-data.service';
import { CreateQuizSociologicalDataDto } from './dto/create-quiz-sociological-data.dto';
import { UpdateQuizSociologicalDataDto } from './dto/update-quiz-sociological-data.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('quiz-sociological-data')
@Controller('quiz-sociological-data')
export class QuizSociologicalDataController {
  constructor(
    private readonly sociologicalDataService: QuizSociologicalDataService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create new sociological data' })
  @ApiResponse({
    status: 201,
    description: 'Sociological data created successfully.',
  })
  @ApiBody({ type: CreateQuizSociologicalDataDto })
  create(@Body() createDto: CreateQuizSociologicalDataDto) {
    return this.sociologicalDataService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sociological data' })
  @ApiResponse({
    status: 200,
    description: 'Sociological data retrieved successfully.',
  })
  findAll() {
    return this.sociologicalDataService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sociological data by ID' })
  @ApiResponse({
    status: 200,
    description: 'Sociological data retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'Sociological data not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sociologicalDataService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update sociological data' })
  @ApiResponse({
    status: 200,
    description: 'Sociological data updated successfully.',
  })
  @ApiBody({ type: UpdateQuizSociologicalDataDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateQuizSociologicalDataDto,
  ) {
    return this.sociologicalDataService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete sociological data' })
  @ApiResponse({
    status: 200,
    description: 'Sociological data deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Sociological data not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sociologicalDataService.remove(id);
  }
}
