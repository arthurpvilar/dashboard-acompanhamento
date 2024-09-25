import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
import { Job } from '../job/entities/job.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    const job = await this.jobRepository.findOne({
      where: { id: createApplicationDto.jobId },
    });

    if (!job) {
      throw new NotFoundException(
        `Job with ID ${createApplicationDto.jobId} not found`,
      );
    }

    const application = this.applicationRepository.create(createApplicationDto);
    application.job = job;

    return this.applicationRepository.save(application);
  }

  async findAll(): Promise<Application[]> {
    return this.applicationRepository.find({ relations: ['job', 'candidate'] });
  }

  async findOne(id: number): Promise<Application> {
    const application = await this.applicationRepository.findOne({
      where: { id },
      relations: ['job', 'candidate'],
    });
    if (!application) {
      throw new NotFoundException(`Application with ID ${id} not found`);
    }
    return application;
  }

  async update(
    id: number,
    updateApplicationDto: UpdateApplicationDto,
  ): Promise<Application> {
    const application = await this.applicationRepository.preload({
      id,
      ...updateApplicationDto,
    });

    if (!application) {
      throw new NotFoundException(`Application with ID ${id} not found`);
    }

    if (updateApplicationDto.jobId) {
      const job = await this.jobRepository.findOne({
        where: { id: updateApplicationDto.jobId },
      });

      if (!job) {
        throw new NotFoundException(
          `Job with ID ${updateApplicationDto.jobId} not found`,
        );
      }

      application.job = job;
    }

    return this.applicationRepository.save(application);
  }

  async remove(id: number): Promise<void> {
    const result = await this.applicationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Application with ID ${id} not found`);
    }
  }
}
