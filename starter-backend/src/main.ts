import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Quiz Social Data API')
    .setDescription('API de desenvolvimento')
    .setVersion('1.0')
    .addTag('SocialData')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
