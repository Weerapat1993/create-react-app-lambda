import React, { PureComponent } from "react"
import { get } from 'lodash';
import { withGetPostsQuery } from "../../graphql/post";
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

export default withGetPostsQuery()(LambdaDemo);