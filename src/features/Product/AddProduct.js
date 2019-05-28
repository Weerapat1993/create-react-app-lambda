import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { ADD_PRODUCT } from '../../graphql/product/gql';
import { Input } from 'antd';

const { Search } = Input

class AddProduct extends PureComponent {
  render() {
    const { addProduct } = this.props
    return (
      <Search
        placeholder="input text"
        enterButton="Add"
        onChange={this.handleInput}
        onSearch={(value) => {
          addProduct({
            variables: {
              text: value
            }
          })
        }}
        allowClear
      />
    
    )
  }
}

export default graphql(ADD_PRODUCT, { name: 'addProduct' })(AddProduct);
