import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { envSchema } from './config/env.js';
import { graphqlOptions } from './config/graphql.js';
import { PrismaModule } from './database/prisma.module.js';
import { ProfileModule } from './modules/profile/profile.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema: envSchema }),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlOptions),
    PrismaModule,
    ProfileModule,
  ],
})
export class AppModule {}
