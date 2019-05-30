import React, { PureComponent, Fragment } from 'react';
import PeopleQuery from './PeopleQuery';
import SearchQuery from './SearchQuery';

class ApolloLinkRest extends PureComponent {
  state = {
    path: ''
  }

  handleSearch = (value) => {
    this.setState({ path: value })
  }

  render() {
    const { path } = this.state;
    return (
      <Fragment>
        <SearchQuery onSearch={this.handleSearch} />
        <PeopleQuery path={path} />
      </Fragment>
    )
  }
}

export default ApolloLinkRest;