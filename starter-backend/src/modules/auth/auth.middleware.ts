import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export default class AuthMiddleware implements NestMiddleware {
  private config = new ConfigService();

  constructor(private readonly userService: UserService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    // check if token exists and if it starts with Bearer
    if (!token) throw new Error('Authorization header is required');

    if (!token.startsWith('Bearer'))
      throw new Error('Authorization header must start with Bearer');

    if (token.split(' ').length !== 2)
      throw new Error('Authorization header must have 2 parts');

    const hash = token?.split(' ')[1];

    // verify token
    verify(hash, this.config.get('JWT_SECRET'), (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
      }

      // check if user exists
      const { id } = decoded as { id: string; email: string };
      const user = this.userService.findOne(id);

      if (!user)
        return res.status(401).json({ status: 401, message: 'Unauthorized' });

      return next();
    });
  }
}
