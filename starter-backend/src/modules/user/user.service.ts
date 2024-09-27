import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByEmailOrUsername(
    emailOrUsername: string,
  ): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password, fullName } = createUserDto;

    // Check if user with email or username already exists
    const existingUser = await this.userRepository.findOne({
      where: [{ email }, { username }],
    });

    if (existingUser) {
      throw new BadRequestException(
        'User with this email or username already exists.',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      username,
      email,
      fullName,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  async updateUser(
    id: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
