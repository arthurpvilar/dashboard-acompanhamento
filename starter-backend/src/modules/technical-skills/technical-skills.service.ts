import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnicalSkillDto } from './dto/create-technical-skill.dto';
import { TechnicalSkill } from './entities/technical-skill.entity';

@Injectable()
export class TechnicalSkillService {
  constructor(
    @InjectRepository(TechnicalSkill)
    private desiredSkillRepository: Repository<TechnicalSkill>,
  ) {}

  async create(
    createTechnicalSkillDto: CreateTechnicalSkillDto,
  ): Promise<TechnicalSkill> {
    const desiredSkill = this.desiredSkillRepository.create(
      createTechnicalSkillDto,
    );
    return this.desiredSkillRepository.save(desiredSkill);
  }

  async remove(id: string): Promise<void> {
    const result = await this.desiredSkillRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Habilidade desejada com o ID "${id}" não encontrada.`,
      );
    }
  }
}
