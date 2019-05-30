import React from 'react';
import { Card } from '../../components'
import { ApolloLinkState } from '../../features/apollo'

const ApolloLinkStatePage = (props) => {
  return (
    <Card>
      <Card.Body>
        <h1>apollo-link-state</h1>
        <ApolloLinkState />
      </Card.Body>
    </Card>
  )
} 

export default ApolloLinkStatePage;
