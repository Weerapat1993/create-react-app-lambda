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
        <div><b>RESTful API : </b>https://swapi.co/api/</div>
        <div><b>Example : </b>people/1</div>
        <SearchQuery onSearch={this.handleSearch} />
        <PeopleQuery path={path} />
      </Fragment>
    )
  }
}

export default ApolloLinkRest;