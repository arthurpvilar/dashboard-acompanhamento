import { Controller, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { DesiredSkillUserDataService } from './desired-skills-user-data.service';
import { CreateDesiredSkillUserDataDto } from './dto/create-desired-skills-user-data.dto';
import { UpdateDesiredSkillUserDataDto } from './dto/update-desired-skills-user-data.dto';
import { DesiredSkillUserData } from './entities/desired-skills-user-data.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('desired-skills-user-data')
@Controller('desired-skills-user-data')
export class DesiredSkillUserDataController {
  constructor(
    private readonly desiredSkillUserDataService: DesiredSkillUserDataService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo dado de habilidade desejada pelo usuário',
  })
  @ApiResponse({
    status: 201,
    description:
      'O dado de habilidade desejada pelo usuário foi criado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  async create(
    @Body() createDesiredSkillUserDataDto: CreateDesiredSkillUserDataDto,
  ): Promise<DesiredSkillUserData> {
    return this.desiredSkillUserDataService.create(
      createDesiredSkillUserDataDto,
    );
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um dado de habilidade desejada pelo usuário pelo seu ID',
  })
  @ApiResponse({
    status: 200,
    description:
      'Dado de habilidade desejada pelo usuário atualizado com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Dado de habilidade desejada pelo usuário não encontrado.',
  })
  async update(
    @Param('id') id: number,
    @Body() updateDesiredSkillUserDataDto: UpdateDesiredSkillUserDataDto,
  ): Promise<DesiredSkillUserData> {
    return this.desiredSkillUserDataService.update(
      id,
      updateDesiredSkillUserDataDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um dado de habilidade desejada pelo usuário pelo seu ID',
  })
  @ApiResponse({
    status: 204,
    description:
      'Dado de habilidade desejada pelo usuário removido com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Dado de habilidade desejada pelo usuário não encontrado.',
  })
  async remove(@Param('id') id: number): Promise<void> {
    await this.desiredSkillUserDataService.remove(id);
  }
}
