import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { Job } from '../job/entities/job.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { LoginDto } from './dto/login-company-dto';
import { forgetPasswordDto } from './dto/forget-password.dto';
import { AccountSettingsDto } from './dto/account-settings.dto';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { randomBytes } from 'crypto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
    private configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companyRepository.findOne({ where: { id } });
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
    return company;
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.findOne(id);
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
    Object.assign(company, updateCompanyDto);
    return this.companyRepository.save(company);
  }

  async remove(id: string): Promise<void> {
    const company = await this.findOne(id);
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
    await this.companyRepository.remove(company);
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const company = await this.companyRepository.findOne({
      where: { email, password },
    });
    if (!company) {
      throw new NotFoundException(`Invalid email or password`);
    }

    const token = this.generateToken(company.id);
    return { token };
  }

  private generateToken(companyId: string): string {
    const payload = { companyId };
    const secret = this.configService.get('JWT_SECRET');
    return sign(payload, secret, { expiresIn: '1h' });
  }

  async recuperarSenha(forgetPasswordDto: forgetPasswordDto): Promise<any> {
    const { email } = forgetPasswordDto;
    const company = await this.companyRepository.findOne({ where: { email } });
    if (!company) {
      throw new NotFoundException(`Company with email "${email}" not found`);
    }

    const recoveryToken = this.generateRecoveryToken();
    await this.sendRecoveryEmail(email, recoveryToken);

    return { message: 'Password recovery email sent successfully' };
  }

  private generateRecoveryToken(): string {
    const token = randomBytes(20).toString('hex');
    return token;
  }

  private async sendRecoveryEmail(
    email: string,
    recoveryToken: string,
  ): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Password Recovery',
      text: `Use the following link to reset your password: http://yourapp.com/reset-password?token=${recoveryToken}`,
    });
  }

  async acessarPerfil(id: string): Promise<any> {
    const company = await this.findOne(id);
    return { company };
  }

  async configurarConta(
    id: string,
    accountSettingsDto: AccountSettingsDto,
  ): Promise<any> {
    const company = await this.findOne(id);
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }

    if (accountSettingsDto.notifications) {
      company.notifications = accountSettingsDto.notifications;
    }

    if (accountSettingsDto.silenceAccount) {
      company.silenced = accountSettingsDto.silenceAccount;
    }

    if (accountSettingsDto.removeAccount) {
      await this.remove(id);
      return { message: 'Account removed successfully' };
    }

    await this.companyRepository.save(company);
    return { message: 'Account settings updated successfully' };
  }

  async getTotalJobs(companyId: string): Promise<number> {
    const totalJobs = await this.jobRepository.count({
      where: { companyId: companyId },
    });
    return totalJobs;
  }

  async getCandidatesPerJob(companyId: string): Promise<number> {
    const jobs = await this.jobRepository.find({
      where: { companyId: companyId },
    });
    const totalCandidates = jobs.reduce(
      (sum, job) => sum + job.applications.length,
      0,
    );
    const average = jobs.length ? totalCandidates / jobs.length : 0;
    return average;
  }

  async getTotalVisits(companyId: string): Promise<number> {
    const jobs = await this.jobRepository.find({
      where: { companyId },
    });
    return jobs.reduce((sum, job) => sum + job.views, 0);
  }

  async getCandidatesPerDay(companyId: string): Promise<any> {
    const jobs = await this.jobRepository.find({
      where: { companyId },
      relations: ['applications'],
    });

    const applicationsPerDay: Record<string, number> = {};
    jobs.forEach((job) => {
      job.applications.forEach((application) => {
        const date = application.assignDate.toISOString().split('T')[0];
        if (!applicationsPerDay[date]) {
          applicationsPerDay[date] = 0;
        }
        applicationsPerDay[date]++;
      });
    });

    return applicationsPerDay;
  }

  async getLastApplications(companyId: string): Promise<any> {
    const jobs = await this.jobRepository.find({
      where: { companyId },
      relations: ['applications'],
    });
    const candidates = jobs.flatMap((job) => job.applications);
    candidates.sort((a, b) => b.assignDate.getTime() - a.assignDate.getTime());
    return candidates.slice(0, 10);
  }
}
