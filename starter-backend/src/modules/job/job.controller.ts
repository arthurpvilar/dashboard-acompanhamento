import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('jobs')
@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo job' })
  @ApiResponse({
    status: 201,
    description: 'O job foi criado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  async create(@Body() createJobDto: CreateJobDto) {
    return await this.jobService.create(createJobDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os jobs' })
  @ApiResponse({ status: 200, description: 'Jobs listados com sucesso.' })
  async findAll() {
    return await this.jobService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um job pelo seu ID' })
  @ApiResponse({ status: 200, description: 'Job encontrado.' })
  @ApiResponse({ status: 404, description: 'Job não encontrado.' })
  async findOne(@Param('id') id: number) {
    const job = await this.jobService.findOne(id);
    if (!job) {
      throw new NotFoundException(`Job with ID "${id}" not found.`);
    }
    return job;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um job pelo seu ID' })
  @ApiResponse({
    status: 200,
    description: 'Job atualizado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Job não encontrado.' })
  async update(@Param('id') id: number, @Body() updateJobDto: UpdateJobDto) {
    const job = await this.jobService.update(id, updateJobDto);
    if (!job) {
      throw new NotFoundException(`Job with ID "${id}" not found.`);
    }
    return job;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um job pelo seu ID' })
  @ApiResponse({ status: 204, description: 'Job removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Job não encontrado.' })
  async remove(@Param('id') id: number) {
    return await this.jobService.remove(id);
  }

  @Get('statistics/total-jobs')
  @ApiOperation({ summary: 'Retorna o número total de jobs' })
  @ApiResponse({
    status: 200,
    description: 'Estatísticas obtidas com sucesso.',
  })
  async getTotalJobs() {
    return await this.jobService.getTotalJobs();
  }

  @Get('statistics/candidates-per-day')
  @ApiOperation({ summary: 'Retorna o número de candidatos por dia' })
  @ApiResponse({
    status: 200,
    description: 'Estatísticas obtidas com sucesso.',
  })
  async getCandidatesPerDay() {
    return await this.jobService.getCandidatesPerDay();
  }

  @Get('statistics/latest-candidates')
  @ApiOperation({ summary: 'Retorna as informações dos últimos candidatos' })
  @ApiResponse({
    status: 200,
    description: 'Estatísticas obtidas com sucesso.',
  })
  async getLatestCandidates() {
    return await this.jobService.getLatestCandidates();
  }
}
