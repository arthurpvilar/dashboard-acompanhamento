import { Post, Body, Delete, Param, Controller } from '@nestjs/common';
import { CreateTechnicalSkillDto } from './dto/create-technical-skill.dto';
import { TechnicalSkill } from './entities/technical-skill.entity';
import { TechnicalSkillService } from './technical-skills.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('technical-skills')
@Controller('technical-skills')
export class TechnicalSkillController {
  constructor(private readonly technicalSkillService: TechnicalSkillService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova habilidade técnica' })
  @ApiResponse({
    status: 201,
    description: 'A habilidade técnica foi criada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  async create(
    @Body() createTechnicalSkillDto: CreateTechnicalSkillDto,
  ): Promise<TechnicalSkill> {
    return this.technicalSkillService.create(createTechnicalSkillDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma habilidade técnica pelo seu ID' })
  @ApiResponse({
    status: 204,
    description: 'Habilidade técnica removida com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Habilidade técnica não encontrada.',
  })
  async remove(@Param('id') id: string): Promise<void> {
    await this.technicalSkillService.remove(id);
  }
}
