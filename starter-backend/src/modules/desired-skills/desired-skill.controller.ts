import { Post, Body, Delete, Param, Controller } from '@nestjs/common';
import { DesiredSkillService } from './desired-skill.service';
import { CreateDesiredSkillDto } from './dto/create-desired-skill.dto';
import { DesiredSkill } from './entities/desired-skill.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('desired-skills')
@Controller('desired-skills')
export class DesiredSkillController {
  constructor(private readonly desiredSkillService: DesiredSkillService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova habilidade desejada' })
  @ApiResponse({
    status: 201,
    description: 'A habilidade desejada foi criada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  async create(
    @Body() createDesiredSkillDto: CreateDesiredSkillDto,
  ): Promise<DesiredSkill> {
    return this.desiredSkillService.create(createDesiredSkillDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma habilidade desejada pelo seu ID' })
  @ApiResponse({
    status: 204,
    description: 'Habilidade desejada removida com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Habilidade desejada não encontrada.',
  })
  async remove(@Param('id') id: number): Promise<void> {
    await this.desiredSkillService.remove(id);
  }
}
