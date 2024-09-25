import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
  ) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const candidate = this.candidateRepository.create(createCandidateDto);
    await this.candidateRepository.save(candidate);
    return candidate;
  }

  findAll(): Promise<Candidate[]> {
    return this.candidateRepository.find();
  }

  async findOne(id: string): Promise<Candidate> {
    const candidate = await this.candidateRepository.findOne({
      where: { id },
    });
    if (!candidate) {
      throw new NotFoundException(`Candidate with ID "${id}" not found.`);
    }
    return candidate;
  }

  async update(
    id: string,
    updateCandidateDto: UpdateCandidateDto,
  ): Promise<Candidate> {
    const candidate = await this.candidateRepository.preload({
      id: id,
      ...updateCandidateDto,
    });
    if (!candidate) {
      throw new NotFoundException(`Candidate with ID "${id}" not found.`);
    }
    return this.candidateRepository.save(candidate);
  }

  async remove(id: string): Promise<void> {
    const candidate = await this.findOne(id);
    await this.candidateRepository.remove(candidate);
  }
}
