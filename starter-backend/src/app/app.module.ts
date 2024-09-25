import { DatabaseModule } from '@App/providers/database/database.module';
import { ConfigProvidersModule } from '@App/providers/environment/environment.module';
import { CompanyModule } from '@modules/company/company.module';
import { JobModule } from '@modules/job/job.module';
import { UserModule } from '@modules/user/user.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthModule } from '../modules/auth/auth.module';
import AuthMiddleware from '../modules/auth/auth.middleware';
import { RouteInfo } from '@nestjs/common/interfaces';
import { ApplicationModule } from '@App/modules/application/application.module';
import { DesiredSkillUserDataModule } from '@App/modules/desired-skills-user-data/desired-skills-user-data.module';
import { DesiredSkillModule } from '@App/modules/desired-skills/desired-skill.module';
import { TechnicalSkillUserDataModule } from '@App/modules/technical-skills-user-data/technical-skills-user-data.module';
import { TechnicalSkillModule } from '@App/modules/technical-skills/technical-skills.module';
import { AddressModule } from '@App/modules/address/address.module';

@Module({
  imports: [
    ConfigProvidersModule,
    DatabaseModule,
    AuthModule,
    AddressModule,
    UserModule,
    CompanyModule,
    JobModule,
    ApplicationModule,
    DesiredSkillModule,
    DesiredSkillUserDataModule,
    TechnicalSkillModule,
    TechnicalSkillUserDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      ...privateRoutes.map((route) => ({
        path: route.path,
        method: route.method,
      })),
    );
  }
}

// Auth Middleware will be applied to the following routes:
const privateRoutes: RouteInfo[] = [
  // todo: add all private routes here
  { path: '/user', method: RequestMethod.GET },
  { path: '/user:id', method: RequestMethod.GET },
  { path: '/user:id', method: RequestMethod.PATCH },
  { path: '/user:id', method: RequestMethod.DELETE },
];
