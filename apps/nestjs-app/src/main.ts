/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory, FastifyAdapter } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const options = new DocumentBuilder()
    .setTitle('Swagger Ng Stuttgart')
    .setDescription('The API')
    .setVersion('1.0')
    .addTag('meetup')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3333, () => {
    console.log('Listening at http://localhost:3333');
    console.log('Swagger Listening at http://localhost:3333/api-docs');
  });
}

bootstrap();
