import React, { PureComponent } from "react"
import { graphql } from "react-apollo";
import { get } from 'lodash';
import { GET_POSTS } from "../../graphql/post/gql";
// import { modalError } from '../../components'

class LambdaDemo extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ul>
        {get(data, 'posts', []).map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </ul>
    )
  }
}

export default graphql(GET_POSTS)(LambdaDemo);