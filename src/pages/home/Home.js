import React from 'react';
import { Card } from '../../components'
import { ProductList, AddProduct } from '../../features';
import { withLocalState } from '../../graphql/store';
import GraphQLTutorial from './GraphQLTutorial';

const Home = (props) => {
  const { products } = props
  return (
    <Card>
      <Card.Body>
        <h1>GraphQL Tutorial</h1>
        <GraphQLTutorial /> 
        <h1>Product List</h1>
        <AddProduct />
        <br />
        <br />
        <ProductList products={products} />
      </Card.Body>
    </Card>
  )
};

const mapStateToProps = ({ data: state, ownProps }) => ({
  todos: state.todos,
  products: state.products,
})

export default withLocalState({
  props: mapStateToProps,
})(Home);
