import { ApolloServer } from "apollo-server-lambda";
import schema from './graphql/schema';

// Load the serverc
import db from './server'

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  tracing: process.env.NODE_ENV === 'development',
});

export const handler = server.createHandler();