import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para aceitar requisições do frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Permitir apenas o frontend na porta 3000
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Permitir envio de cookies e cabeçalhos de autorização
  });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Quiz Social Data API')
    .setDescription('API de desenvolvimento')
    .setVersion('1.0')
    .addTag('SocialData')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
