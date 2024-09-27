// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
