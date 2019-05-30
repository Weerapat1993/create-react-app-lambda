import React, { PureComponent } from 'react';
import { Input } from 'antd';

const { Search } = Input

class SearchQuery extends PureComponent {
  render() {
    const { onSearch } = this.props
    return (
      <Search
        placeholder="path"
        enterButton="Search"
        onSearch={onSearch}
        allowClear
      />
    )
  }
}

export default (SearchQuery);
