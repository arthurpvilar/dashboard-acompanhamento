import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalSkill } from './entities/technical-skill.entity';
import { TechnicalSkillService } from './technical-skills.service';
import { TechnicalSkillController } from './technical-skills.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalSkill])],
  providers: [TechnicalSkillService],
  controllers: [TechnicalSkillController],
})
export class TechnicalSkillModule {}
