import { DetailedUserDto } from '@App/modules/user/dto/detailed-user.dto';
import { User } from '@modules/user/entities/user.entity';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User | DetailedUserDto;
  }
}
