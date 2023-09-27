import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  //global jwt guard
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    "origin": '*',
    "methods": 'GET,HEAD,PUT,PATCH,POST,DELETE',
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(configService.get<string>('PORT'));
}
bootstrap();
