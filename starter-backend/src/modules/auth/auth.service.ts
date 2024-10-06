import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmailOrUsername(loginDto.email);
    if (!user) {
      console.log('Usuário não encontrado para o email:', loginDto.email);
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Comparação de senha usando bcrypt.compareSync
    const isPasswordValid = bcrypt.compareSync(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      console.error('Senha inválida para o email:', user.email);
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Alteração para utilizar index em vez de id no payload
    const payload = { index: user.index, email: user.email };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: { ...user, password: undefined },
    };
  }
}
