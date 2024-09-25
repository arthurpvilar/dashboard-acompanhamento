import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private config = new ConfigService();
  constructor(private readonly userService: UserService) {}

  async login(login: LoginDto) {
    if (!login.email_or_username) throw new Error('Email is required.');

    const user = await this.userService.findByLogin(login.email_or_username);

    if (!user) throw new Error('User not found.');

    const isPasswordValid = bcrypt.compareSync(login.password, user.password);

    if (!isPasswordValid) throw new UnauthorizedException('Invalid password.');

    // to avoid returning the password in the response
    delete user.password;

    // create a token
    const { id, companyId, email } = user;
    const token = jwt.sign(
      { id, companyId, email },
      this.config.get('JWT_SECRET'),
      {
        expiresIn: '1d',
      },
    );

    return { access_token: { ...user, token } };
  }
}
