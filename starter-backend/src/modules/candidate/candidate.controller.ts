import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('candidate')
@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo candidato' })
  @ApiResponse({ status: 201, description: 'Candidato criado com sucesso.' })
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os candidatos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de candidatos recuperada com sucesso.',
  })
  findAll() {
    return this.candidateService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um candidato pelo seu ID' })
  @ApiResponse({ status: 200, description: 'Candidato encontrado.' })
  @ApiResponse({ status: 404, description: 'Candidato não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza informações de um candidato pelo seu ID' })
  @ApiResponse({
    status: 200,
    description: 'Candidato atualizado com sucesso.',
  })
  update(
    @Param('id') id: string,
    @Body() updateCandidateDto: UpdateCandidateDto,
  ) {
    return this.candidateService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um candidato pelo seu ID' })
  @ApiResponse({ status: 204, description: 'Candidato removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.candidateService.remove(id);
  }
}
