import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '@App/config/database/database.providers';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)],
})
export class DatabaseModule {}
