import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DesiredSkillUserData } from './entities/desired-skills-user-data.entity';
import { CreateDesiredSkillUserDataDto } from './dto/create-desired-skills-user-data.dto';
import { UpdateDesiredSkillUserDataDto } from './dto/update-desired-skills-user-data.dto';

@Injectable()
export class DesiredSkillUserDataService {
  constructor(
    @InjectRepository(DesiredSkillUserData)
    private desiredSkillUserDataRepository: Repository<DesiredSkillUserData>,
  ) {}

  async create(
    createDesiredSkillUserDataDto: CreateDesiredSkillUserDataDto,
  ): Promise<DesiredSkillUserData> {
    const desiredSkillUserData = this.desiredSkillUserDataRepository.create(
      createDesiredSkillUserDataDto,
    );
    return this.desiredSkillUserDataRepository.save(desiredSkillUserData);
  }

  async update(
    id: number,
    updateDesiredSkillUserDataDto: UpdateDesiredSkillUserDataDto,
  ): Promise<DesiredSkillUserData> {
    const desiredSkillUserData =
      await this.desiredSkillUserDataRepository.findOne({ where: { id } });
    if (!desiredSkillUserData) {
      throw new NotFoundException(
        `Dados da habilidade desejada com o ID "${id}" não encontrados.`,
      );
    }

    Object.assign(desiredSkillUserData, updateDesiredSkillUserDataDto);
    return this.desiredSkillUserDataRepository.save(desiredSkillUserData);
  }

  async remove(id: number): Promise<void> {
    const result = await this.desiredSkillUserDataRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Dados da habilidade desejada com o ID "${id}" não encontrados.`,
      );
    }
  }
}
