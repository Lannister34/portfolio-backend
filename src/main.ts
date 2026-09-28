import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import type { Express } from 'express';
import { AppModule } from './app.module.js';
import type { Env } from './config/env.js';

async function bootstrap(): Promise<Express> {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.init();
  const config = app.get<ConfigService<Env, true>>(ConfigService);
  void app.listen(config.get('PORT', { infer: true }));
  return app.getHttpAdapter().getInstance();
}

export default await bootstrap();
