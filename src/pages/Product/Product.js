import React from 'react';
import { Mutation } from 'react-apollo';
import { List } from 'antd';
import styled from 'styled-components'
import { TOGGLE_PRODUCT, DELETE_PRODUCT } from '../../graphql/product/gql';

const Text = styled.span`
  color: ${props => props.color || '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  float: ${props => props.float || 'left'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

const Product = ({ id, completed, text }) => (
  <Mutation mutation={TOGGLE_PRODUCT} variables={{ id }}>
    {toggleProduct => (
      <List.Item>
        <Text onClick={toggleProduct} completed={completed}>{text}</Text> &nbsp;
        <Mutation mutation={DELETE_PRODUCT} variables={{ id }}>
          {deleteProduct => (
            <Text bold onClick={deleteProduct} color="red" float="right">X</Text>
          )}
        </Mutation>
      </List.Item>
    )}
  </Mutation>
);

export default Product;