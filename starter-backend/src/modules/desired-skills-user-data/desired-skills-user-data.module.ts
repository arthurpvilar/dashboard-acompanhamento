import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesiredSkillUserData } from './entities/desired-skills-user-data.entity';
import { DesiredSkillUserDataController } from './desired-skills-user-data.controller';
import { DesiredSkillUserDataService } from './desired-skills-user-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([DesiredSkillUserData])],
  providers: [DesiredSkillUserDataService],
  controllers: [DesiredSkillUserDataController],
})
export class DesiredSkillUserDataModule {}
