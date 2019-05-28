import React from 'react';
import { graphql } from 'react-apollo'
import { Card } from '../../components'
import { LambdaDemo, ProductList, AddProduct } from '../../features';
import { QUERY_STORE } from '../../graphql/store';

const Home = (props) => {
  const { products } = props
  return (
    <Card>
      <Card.Body>
        <h1>Product List</h1>
        <LambdaDemo />
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

export default graphql(QUERY_STORE, {
  props: mapStateToProps,
})(Home);
