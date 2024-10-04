import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { ProtectedController } from './protected.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [ProtectedController], // Adicione o controlador aqui
  providers: [],
})
export class AppModule {}
