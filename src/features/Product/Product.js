import React from 'react';
import { compose } from 'react-apollo';
import { List } from 'antd';
import styled from 'styled-components'
import { withToggleProductMutation, withDeleteProductMutation } from '../../graphql/product'

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

export default compose(
  withToggleProductMutation({
    name: 'toggleProduct',
    options: (props) => ({
      variables: {
        id: props.id,
      } 
    }),
  }),
  withDeleteProductMutation({
    name: 'deleteProduct',
    options: (props) => ({
      variables: {
        id: props.id,
      } 
    }),
  }),
)(Product);