import { merge } from 'lodash';
import { gql } from "apollo-server-lambda";
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLJSON from 'graphql-type-json';
import { productResolvers, productTypeDef as Product } from './product'

const Query = gql`
  scalar JSON

  # type Github {
  #   id: Int!
  #   name: String
  #   full_name: String
  #   description: String
  #   html_url: String
  #   owner: Owner
  #   language: String
  #   stargazers_count: Int
  #   watchers_count: Int
  #   open_issues: Int
  # }

  # type Owner {
  #   avatar_url: String
  # }

  type StatusCode {
    code: Int
  }

  type Query {
    hello: String
  }

  type Mutation {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
  },
  
  JSON: GraphQLJSON,
};

export default makeExecutableSchema({
  typeDefs: [
    Query,
    Product,
  ],
  resolvers: merge(
    resolvers,
    productResolvers,
  )
})