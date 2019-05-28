import { ApolloServer, gql } from "apollo-server-lambda";
import { find } from 'lodash';
import { fetchGithubRepoQuery } from "../graphql/github";

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Apollo', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const typeDefs = gql`
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  type Github {
    id: Int!
    name: String
    full_name: String
  }

  type Query {
    hello: String
    posts: [Post]
    author(id: Int!): Author
    github(name: String!): [Github]
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
    github: fetchGithubRepoQuery,
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export const handler = server.createHandler();