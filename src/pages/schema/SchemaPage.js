import React, { PureComponent } from 'react';
import { GET_USER, GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER } from '../../graphql/user/gql';
import Schema from './Schema'

class SchemaPage extends PureComponent {
  render() {
    return (
      <div>
        <h1>Schema</h1>
        <Schema schema={GET_USER} />
        <Schema schema={GET_USER_BY_ID} />
        <Schema schema={ADD_USER} />
        <Schema schema={UPDATE_USER} />
        <Schema schema={DELETE_USER} />
      </div>
    )
  }
}

export default SchemaPage;