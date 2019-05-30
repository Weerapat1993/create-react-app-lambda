import React from 'react';
import { Card } from '../../components'
import { ApolloLinkRest } from '../../features/apollo'

const ApolloLinkRestPage = (props) => {
  return (
    <Card>
      <Card.Body>
        <h1>apollo-link-rest</h1>
        <ApolloLinkRest />
      </Card.Body>
    </Card>
  )
} 

export default ApolloLinkRestPage;
