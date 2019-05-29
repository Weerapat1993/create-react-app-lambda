import React from 'react';
import { Card } from '../../components'
import { LambdaDemo, ProductList, AddProduct } from '../../features';
import { withLocalState } from '../../graphql/store';

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

export default withLocalState({
  props: mapStateToProps,
})(Home);
