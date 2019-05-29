import React, { PureComponent, Fragment } from "react"
import { get } from 'lodash';
import { compose } from 'react-apollo'
import { withGetPostsQuery } from "../../graphql/post";
import { withGetGithubRepoQuery } from '../../graphql/github';
// import { modalError } from '../../components'

class LambdaDemo extends PureComponent {
  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <Fragment>
        Github Repo : {get(data, 'github', []).length}
        <ul>
          {get(data, 'posts', []).map((item, key) => (
            <li key={key}>{item.title}</li>
          ))}
        </ul>
      </Fragment>
    
    )
  }
}

export default compose(
  withGetPostsQuery(),
  withGetGithubRepoQuery({
    skip: (props) => !props.name,
    options: (props) => ({
      variables: {
        name: props.name
      },
    }) 
  }),
)(LambdaDemo);