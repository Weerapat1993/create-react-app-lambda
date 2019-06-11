import gql from 'graphql-tag';
import { graphql } from "react-apollo";
// Store
export const QUERY_STORE = gql`
  query {
    todos @client {
      id
      completed
      text
    }
  }
`;

export const withLocalState = (config = {}) => graphql(QUERY_STORE, config);

// Initial State
export const inititalState = {
  todos: [],
}