import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesiredSkillService } from './desired-skill.service';
import { DesiredSkillController } from './desired-skill.controller';
import { DesiredSkill } from './entities/desired-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DesiredSkill])],
  providers: [DesiredSkillService],
  controllers: [DesiredSkillController],
})
export class DesiredSkillModule {}
