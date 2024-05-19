import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //here document builder
  const config = new DocumentBuilder()
  .setTitle('Employee and Department API')
  .setDescription('Here is the list of Employee and Department Api Endpoints')
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api',app,document, {
    customSiteTitle : "Employee and Dept Api Endpoints"
  });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
