import React, { Fragment } from 'react';
import { ProductList, AddProduct } from '../';
import { withLocalState } from '../../graphql/store';

const ApolloLinkState = (props) => {
  const { products } = props
  return (
    <Fragment>
      <AddProduct />
      <br />
      <br />
      <ProductList products={products} />
    </Fragment>
  )
};

const mapStateToProps = ({ data: state, ownProps }) => ({
  todos: state.todos,
  products: state.products,
})

export default withLocalState({
  props: mapStateToProps,
})(ApolloLinkState);
