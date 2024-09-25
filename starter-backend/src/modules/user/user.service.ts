import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Company } from '../company/entities/company.entity';
import { DetailedUserDto } from './dto/detailed-user.dto';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { randomBytes } from 'crypto';
import { LoginDto } from './dto/login-user.dto';
import { ForgetPasswordDto } from './dto/forget-user-password.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    private configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByLogin(login: string): Promise<User> {
    // login could be email or username
    const user = await this.userRepository.findOne({
      where: [{ email: login }, { username: login }],
    });

    if (!user)
      throw new NotFoundException(`User with login "${login}" not found`);

    return user;
  }

  async findOne(id: string): Promise<User | DetailedUserDto> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    if (user.companyId) {
      const company = await this.companyRepository.findOne({
        where: { id: user.companyId },
      });

      (user as DetailedUserDto).company = company;
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = (await this.findOne(id)) as User;
    await this.userRepository.remove(user);
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

  async recuperarSenha(forgetPasswordDto: ForgetPasswordDto): Promise<any> {
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
}
