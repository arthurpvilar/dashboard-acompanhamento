import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobRepository.create(createJobDto);
    await this.jobRepository.save(job);
    return job;
  }

  findAll(): Promise<Job[]> {
    return this.jobRepository.find({ relations: ['applications'] });
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobRepository.findOne({
      where: { id },
      relations: ['applications'],
    });
    if (!job) {
      throw new NotFoundException(`Job with ID "${id}" not found.`);
    }
    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.jobRepository.preload({
      id,
      ...updateJobDto,
    });
    if (!job) {
      throw new NotFoundException(`Job with ID "${id}" not found.`);
    }
    return this.jobRepository.save(job);
  }

  async remove(id: number): Promise<void> {
    const job = await this.findOne(id);
    await this.jobRepository.remove(job);
  }

  async getTotalJobs(): Promise<number> {
    return this.jobRepository.count();
  }

  async getCandidatesPerDay(): Promise<any> {
    const jobs = await this.jobRepository
      .createQueryBuilder('job')
      .leftJoinAndSelect('job.applications', 'application')
      .select('DATE(application.assignDate)', 'date')
      .addSelect('COUNT(application.id)', 'count')
      .groupBy('DATE(application.assignDate)')
      .getRawMany();

    return jobs.map((candidate) => ({
      date: candidate.date,
      count: parseInt(candidate.count, 10),
    }));
  }

  async getLatestCandidates(): Promise<any> {
    const jobs = await this.jobRepository
      .createQueryBuilder('job')
      .leftJoinAndSelect('job.applications', 'application')
      .select([
        'application.id as id',
        'application.candidateId as name',
        'application.assignDate as applicationDate',
      ])
      .orderBy('application.assignDate', 'DESC')
      .limit(10)
      .getRawMany();

    return jobs.map((candidate) => ({
      id: candidate.id,
      name: candidate.name,
      applicationDate: candidate.applicationDate,
    }));
  }
}
