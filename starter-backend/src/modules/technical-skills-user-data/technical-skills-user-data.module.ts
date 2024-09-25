import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalSkillUserData } from './entities/technical-skills-user-data.entity';
import { TechnicalSkillUserDataService } from './technical-skills-user-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalSkillUserData])],
  providers: [TechnicalSkillUserDataService],
  controllers: [TechnicalSkillUserData],
})
export class TechnicalSkillUserDataModule {}
