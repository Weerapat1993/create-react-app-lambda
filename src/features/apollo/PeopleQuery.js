import React, { PureComponent, Fragment } from "react"
import { get } from 'lodash'
import { withGetPeopleQuery } from "../../graphql/apollo";

class PeopleQuery extends PureComponent {
  componentDidUpdate(prevProps, prevState) {
    const { path, data } = this.props
    if(path !== prevProps.path) {
      const refetch = get(data, 'refetch', () => null);
      refetch()
    }
  }

  render() {
    const { data, path } = this.props;
    const person = get(data, 'person')
    const loading = get(data, 'loading', false)
    console.log(this.props)
    return (
      <Fragment>
        <b>Search Result : {path}</b>
        <br />
        <div>Example : people/1</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <pre>
            {JSON.stringify(person, null, '  ')}
          </pre>
        )}
      </Fragment>
      
    )
  }
}

export default withGetPeopleQuery({ 
  skip: props => !props.path,
  options: props => ({
    variables: {
      type: 'Person',
      path: props.path
    }
  }),
  fetchPolicy: "no-cache",
  partialRefetch: false,
})(PeopleQuery);