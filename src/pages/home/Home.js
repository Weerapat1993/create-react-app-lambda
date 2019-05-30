import React from 'react';
import { Card } from '../../components'
import GraphQLTutorial from './GraphQLTutorial';

const Home = (props) => {
  return (
    <Card>
      <Card.Body>
        <h1>GraphQL Tutorial</h1>
        <GraphQLTutorial /> 
      </Card.Body>
    </Card>
  )
};

export default Home
