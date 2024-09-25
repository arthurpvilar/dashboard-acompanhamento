import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('applications')
@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova aplicação' })
  @ApiResponse({
    status: 201,
    description: 'A aplicação foi criada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationService.create(createApplicationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todas as aplicações' })
  @ApiResponse({
    status: 200,
    description: 'Aplicações listadas com sucesso.',
  })
  findAll() {
    return this.applicationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma aplicação pelo seu ID' })
  @ApiResponse({ status: 200, description: 'Aplicação encontrada.' })
  @ApiResponse({ status: 404, description: 'Aplicação não encontrada.' })
  findOne(@Param('id') id: number) {
    return this.applicationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma aplicação pelo seu ID' })
  @ApiResponse({
    status: 200,
    description: 'Aplicação atualizada com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Aplicação não encontrada.' })
  update(
    @Param('id') id: number,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    return this.applicationService.update(id, updateApplicationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma aplicação pelo seu ID' })
  @ApiResponse({
    status: 204,
    description: 'Aplicação removida com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Aplicação não encontrada.',
  })
  remove(@Param('id') id: number) {
    return this.applicationService.remove(id);
  }
}
