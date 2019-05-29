import React, { PureComponent, Fragment } from 'react';
import GithubList from './GithubList'
import { Input } from 'antd';
import TableExample from './TableExample';

const { Search } = Input

class GithubContainer extends PureComponent {
  state = {
    name: '',
  }
  render() {
    const { name } = this.state
    return (
      <Fragment>
        <TableExample />
        <Search
          placeholder="Github Name"
          enterButton="Search"
          onSearch={(value) => {
            this.setState({ name: value })
          }}
          allowClear
        />
        <br/><br/>
        <GithubList name={name} />
      </Fragment>
    )
  }
}

export default GithubContainer
