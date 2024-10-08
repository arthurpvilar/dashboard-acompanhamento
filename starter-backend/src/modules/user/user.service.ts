import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User, UserRole, UserStatus } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByEmailOrUsername(
    emailOrUsername: string,
  ): Promise<User | undefined> {
    console.log('Buscando usuário com email ou username:', emailOrUsername);
    const user = await this.userRepository.findOne({
      where: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      console.log(
        'Usuário não encontrado com email/username:',
        emailOrUsername,
      );
    }

    return user;
  }

  async findOne(index: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { index },
    });

    if (!user) {
      console.log(`Usuário com index ${index} não encontrado`);
    }

    return user;
  }

  async findAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    if (!users.length) {
      throw new NotFoundException('Nenhum usuário encontrado.');
    }
    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;

    const existingUser = await this.userRepository.findOne({
      where: [{ email }, { username }],
    });

    if (existingUser) {
      console.error('Usuário com este email ou username já existe:', email);
      throw new BadRequestException(
        'User with this email or username already exists.',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  async updateUser(
    index: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<User> {
    console.log('Atualizando usuário com index:', index);
    const user = await this.userRepository.findOne({
      where: { index },
    });

    if (!user) {
      console.error(`Usuário com index ${index} não encontrado`);
      throw new NotFoundException(`User with index ${index} not found`);
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async deleteUser(index: string): Promise<void> {
    console.log('Deletando usuário com index:', index);
    const result = await this.userRepository.delete(index);
    if (result.affected === 0) {
      console.error(`Usuário com index ${index} não encontrado`);
      throw new NotFoundException(`User with index ${index} not found`);
    }
  }

  // Nova função para retornar as estatísticas dos usuários
  async getUserStatistics() {
    const studentCount = await this.userRepository.count({
      where: { role: UserRole.STUDENT },
    });
    const teacherCount = await this.userRepository.count({
      where: { role: UserRole.TEACHER },
    });
    const adminCount = await this.userRepository.count({
      where: { role: UserRole.ADMINISTRATOR },
    });

    const activeCount = await this.userRepository.count({
      where: { status: UserStatus.ATIVO },
    });
    const pendingCount = await this.userRepository.count({
      where: { status: UserStatus.PENDENTE },
    });
    const inactiveCount = await this.userRepository.count({
      where: { status: UserStatus.INATIVO },
    });

    return {
      students: studentCount,
      teachers: teacherCount,
      administrators: adminCount,
      active: activeCount,
      pending: pendingCount,
      inactive: inactiveCount,
    };
  }
}
