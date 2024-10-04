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
    console.log('Iniciando processo de login para email:', loginDto.email);
    
    const user = await this.userService.findByEmailOrUsername(loginDto.email);
    if (!user) {
      console.log('Usuário não encontrado para o email:', loginDto.email);
      throw new UnauthorizedException('Invalid credentials.');
    }

    console.log('Usuário encontrado:', user);
    console.log('Senha armazenada no banco:', user.password);

    // Comparação de senha usando bcrypt.compareSync
    const isPasswordValid = bcrypt.compareSync(loginDto.password, user.password);
    console.log('Resultado da comparação de senha:', isPasswordValid);

    if (!isPasswordValid) {
      console.error('Senha inválida para o email:', user.email);
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Alteração para utilizar index em vez de id no payload
    const payload = { index: user.index, email: user.email };
    const token = this.jwtService.sign(payload);

    console.log('Token gerado com sucesso:', token);

    return {
      access_token: token,
      user: { ...user, password: undefined },
    };
  }
}
