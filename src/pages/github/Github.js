import React, { PureComponent } from 'react';
import { Card } from '../../components'
import { GithubContainer } from '../../features/github'

class Github extends PureComponent {
  render() {
    return (
      <Card>
        <Card.Body>
          <h1>Github</h1>
          <GithubContainer />
        </Card.Body>
      </Card>
    )
  }
}

export default Github;
