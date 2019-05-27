import React from 'react';
import { List } from 'antd';
import Product from './Product'

const ProductList = ({ products }) => (
  <List
    header={<b>Product List</b>}
    bordered
    dataSource={products}
    renderItem={item => (
      <Product {...item} />
    )}
  />
)

export default ProductList;
