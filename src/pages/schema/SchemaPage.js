import React, { PureComponent } from 'react';
import { GET_USER, GET_USER_BY_ID } from '../../graphql/user/gql';
import Schema from './Schema'

class SchemaPage extends PureComponent {
  render() {
    console.log(GET_USER)
    console.log(GET_USER_BY_ID)
    return (
      <div>
        <h1>Schema</h1>
        <Schema schema={GET_USER} />
        <Schema schema={GET_USER_BY_ID} />
      </div>
    )
  }
}

export default SchemaPage;