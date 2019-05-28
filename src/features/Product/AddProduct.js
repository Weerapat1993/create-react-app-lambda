import React, { PureComponent } from 'react';
import { withAddProductMutation } from '../../graphql/product';
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

export default withAddProductMutation({ name: 'addProduct' })(AddProduct);
