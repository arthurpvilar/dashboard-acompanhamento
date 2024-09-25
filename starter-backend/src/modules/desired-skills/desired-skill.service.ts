import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDesiredSkillDto } from './dto/create-desired-skill.dto';
import { DesiredSkill } from './entities/desired-skill.entity';

@Injectable()
export class DesiredSkillService {
  constructor(
    @InjectRepository(DesiredSkill)
    private desiredSkillRepository: Repository<DesiredSkill>,
  ) {}

  async create(
    createDesiredSkillDto: CreateDesiredSkillDto,
  ): Promise<DesiredSkill> {
    const desiredSkill = this.desiredSkillRepository.create(
      createDesiredSkillDto,
    );
    return this.desiredSkillRepository.save(desiredSkill);
  }

  async remove(id: number): Promise<void> {
    const result = await this.desiredSkillRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Habilidade desejada com o ID "${id}" não encontrada.`,
      );
    }
  }
}
