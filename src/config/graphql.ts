import { join } from 'node:path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

export const graphqlOptions: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: process.env.NODE_ENV === 'production' ? true : join(process.cwd(), 'schema.gql'),
  sortSchema: true,
  graphiql: false,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
};
