import { Application } from '@App/modules/application/entities/application.entity';
import { Candidate } from '@App/modules/candidate/entities/candidate.entity';
import { DesiredSkillUserData } from '@App/modules/desired-skills-user-data/entities/desired-skills-user-data.entity';
import { DesiredSkill } from '@App/modules/desired-skills/entities/desired-skill.entity';
import { TechnicalSkillUserData } from '@App/modules/technical-skills-user-data/entities/technical-skills-user-data.entity';
import { TechnicalSkill } from '@App/modules/technical-skills/entities/technical-skill.entity';
import { Company } from '@modules/company/entities/company.entity';
import { Job } from '@modules/job/entities/job.entity';
import { User } from '@modules/user/entities/user.entity';

export const entities = [
  User,
  Company,
  Candidate,
  Job,
  Application,
  DesiredSkill,
  DesiredSkillUserData,
  TechnicalSkill,
  TechnicalSkillUserData,
];
