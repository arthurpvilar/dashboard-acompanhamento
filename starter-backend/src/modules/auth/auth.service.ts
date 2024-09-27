// src/auth/auth.service.ts
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

  async validateUser(emailOrUsername: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmailOrUsername(emailOrUsername);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { ...result } = user; // Exclude password from result
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmailOrUsername(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const isPasswordValid = bcrypt.compareSync(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: { ...user, password: undefined },
    };
  }
}
