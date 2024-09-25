import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import { UserService } from '../../modules/user/user.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export default class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    // Check if token exists and if it starts with Bearer
    if (!token) throw new Error('Authorization header is required');

    if (!token.startsWith('Bearer'))
      throw new Error('Authorization header must start with Bearer');

    if (token.split(' ').length !== 2)
      throw new Error('Authorization header must have 2 parts');

    const hash = token.split(' ')[1];

    // Verify token
    verify(hash, this.configService.get('JWT_SECRET'), async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          message: 'Unauthorized',
        });
      }

      // Check if user exists
      const { id } = decoded as { id: string };
      const user = await this.userService.findOne(id);

      if (!user)
        return res.status(401).json({ status: 401, message: 'Unauthorized' });

      // Attach user and ids to request
      req.user = user;

      return next();
    });
  }
}
