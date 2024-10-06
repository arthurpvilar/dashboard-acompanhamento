import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Token expiration will be handled
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: { id: string; email: string }): Promise<User> {
    const user = await this.userService.findOne(payload.id);
    if (!user) {
      throw new UnauthorizedException('Unauthorized validator');
    }
    return user; // Attach user to request
  }
}
