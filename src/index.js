import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link'
import { withClientState } from 'apollo-link-state';
// import { RetryLink } from 'apollo-link-retry';
import { onError } from "apollo-link-error";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from './components';
import { theme } from './config/theme';
import { inititalState } from './graphql/store';
import { resolvers } from './graphql/resolvers'
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles/GlobalStyle';

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  resolvers: { Mutation: resolvers },
  defaults: inititalState,
});

const httpLink = new HttpLink({ uri: "/.netlify/functions/graphql" })
const restLink = new RestLink({ uri: "https://swapi.co/api/" });
// const retryLink = new RetryLink()
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink, 
    // retryLink, //ยิง API ซ้ำๆ 5 รอบ 
    restLink, // REST API
    errorLink, // Log Error Message
    httpLink,
  ])
});

const Index = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Route path='/' component={App} />
        </Router>
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
