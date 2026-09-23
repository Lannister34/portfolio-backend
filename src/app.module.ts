import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env.js';
import { PrismaModule } from './database/prisma.module.js';
import { ProfileModule } from './modules/profile/profile.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema: envSchema }),
    PrismaModule,
    ProfileModule,
  ],
})
export class AppModule {}
