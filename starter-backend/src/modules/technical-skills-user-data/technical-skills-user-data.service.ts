import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TechnicalSkillUserData } from './entities/technical-skills-user-data.entity';
import { CreateTechnicalSkillUserDataDto } from './dto/create-technical-skills-user-data.dto';
import { UpdateTechnicalSkillUserDataDto } from './dto/update-technical-skills-user-data.dto';
import { TechnicalSkill } from '../technical-skills/entities/technical-skill.entity';

@Injectable()
export class TechnicalSkillUserDataService {
  constructor(
    @InjectRepository(TechnicalSkillUserData)
    private readonly technicalSkillUserDataRepository: Repository<TechnicalSkillUserData>,
    @InjectRepository(TechnicalSkill)
    private readonly technicalSkillRepository: Repository<TechnicalSkill>,
  ) {}

  async create(
    createTechnicalSkillUserDataDto: CreateTechnicalSkillUserDataDto,
  ): Promise<TechnicalSkillUserData> {
    const technicalSkill = await this.technicalSkillRepository.findOne({
      where: {
        id: createTechnicalSkillUserDataDto.technicalSkillId,
      },
    });

    if (!technicalSkill) {
      throw new NotFoundException(
        `Technical Skill with ID "${createTechnicalSkillUserDataDto.technicalSkillId}" not found.`,
      );
    }

    const technicalSkillUserData = this.technicalSkillUserDataRepository.create(
      createTechnicalSkillUserDataDto,
    );
    technicalSkillUserData.technicalSkill = technicalSkill;

    return this.technicalSkillUserDataRepository.save(technicalSkillUserData);
  }

  async update(
    id: number,
    updateTechnicalSkillUserDataDto: UpdateTechnicalSkillUserDataDto,
  ): Promise<TechnicalSkillUserData> {
    const technicalSkillUserData =
      await this.technicalSkillUserDataRepository.findOne({ where: { id } });
    if (!technicalSkillUserData) {
      throw new NotFoundException(
        `Dados da habilidade desejada com o ID "${id}" não encontrados.`,
      );
    }

    Object.assign(technicalSkillUserData, updateTechnicalSkillUserDataDto);
    return this.technicalSkillUserDataRepository.save(technicalSkillUserData);
  }

  async remove(id: string): Promise<void> {
    const result = await this.technicalSkillUserDataRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Dados da habilidade desejada com o ID "${id}" não encontrados.`,
      );
    }
  }
}
