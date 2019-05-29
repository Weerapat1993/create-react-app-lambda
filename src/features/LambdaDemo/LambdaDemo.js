import React, { PureComponent, Fragment } from "react"
import { get } from 'lodash';
import { withGetPostsQuery } from "../../graphql/post";
// import { modalError } from '../../components'

class LambdaDemo extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <ul>
          {get(data, 'posts', []).map((item, key) => (
            <li key={key}>{item.title}</li>
          ))}
        </ul>
      </Fragment>
    
    )
  }
}

export default withGetPostsQuery()(LambdaDemo);