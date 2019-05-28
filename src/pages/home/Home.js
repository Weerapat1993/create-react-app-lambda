import React from 'react';
import styled from 'styled-components';
import { connect } from '../../utils/connect';
import { LambdaDemo, ProductList, AddProduct } from '../../features';

const WhiteCard = styled.div`
  padding: 24px;
  min-height: 280px;
  width: 100%;
  background: white;
`
 
const Home = (props) => {
  const { products } = props
  return (
    <WhiteCard>
      <h1>Product List</h1>
      <LambdaDemo />
      <AddProduct />
      <br />
      <br />
      <ProductList products={products} />
    </WhiteCard>
  )
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  products: state.products,
})

export default connect(mapStateToProps)(Home);
