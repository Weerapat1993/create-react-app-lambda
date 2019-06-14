import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from '../../components'

const Home = (props) => {
  return (
    <Card>
      <Card.Body>
        <h1>GraphQL Tutorial</h1>
        <ul>
          <li><Link to='/apollo-link-rest'>apollo-link-rest</Link></li>
          <li><Link to='/apollo-link-state'>apollo-link-state</Link></li>
        </ul>
        <h1>Apollo Server</h1>
        <ul>
          <li><Link to='/products'>Categories</Link></li>
          <li><Link to='/products'>Product</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </Card.Body>
    </Card>
  )
};

export default Home
