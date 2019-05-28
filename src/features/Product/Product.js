import React from 'react';
import { graphql, compose } from 'react-apollo';
import { List } from 'antd';
import styled from 'styled-components'
import { TOGGLE_PRODUCT, DELETE_PRODUCT } from '../../graphql/product/gql';

const Text = styled.span`
  color: ${props => props.color || '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  float: ${props => props.float || 'left'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

const Product = ({ id, completed, text, toggleProduct, deleteProduct }) => (
  <List.Item>
    <Text onClick={toggleProduct} completed={completed}>{text}</Text> &nbsp;
    <Text bold onClick={deleteProduct} color="red" float="right">X</Text>
  </List.Item>
);

const withToggleProductMutation = graphql(TOGGLE_PRODUCT, {
  name: 'toggleProduct',
  options: (props) => ({
    variables: {
      id: props.id,
    } 
  }),
});

const withDeleteProductMutation = graphql(DELETE_PRODUCT, {
  name: 'deleteProduct',
  options: (props) => ({
    variables: {
      id: props.id,
    } 
  }),
})

export default compose(
  withToggleProductMutation,
  withDeleteProductMutation,
)(Product);