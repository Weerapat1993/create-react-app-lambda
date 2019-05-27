import React, { Fragment } from "react"
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { get } from 'lodash';

const LambdaDemo = () => (
  <Fragment>
    <Query
      query={gql`
        {
          hello
        }
      `}
    >
      {({ data }) =>
        <div>A greeting from the server: {data.hello}</div>}
    </Query>
    <Query
      query={gql`
        {
          posts {
            id
            title
            votes
          }
        }
      `}
    >
      {({ data }) => (
        <ul>
          {get(data, 'posts', []).map((item, key) => (
            <li key={key}>{item.title}</li>
          ))}
        </ul>
      )}
    </Query>
  </Fragment>
);

export default LambdaDemo;