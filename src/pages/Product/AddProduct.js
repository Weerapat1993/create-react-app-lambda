import React, { PureComponent, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_PRODUCT } from '../../graphql/product/gql';
import { Input } from 'antd';

const { Search } = Input

class AddProduct extends PureComponent {
  state = {
    text: '',
  }

  handleInput = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { text } = this.state;
    return (
      <Fragment>
        <Mutation mutation={ADD_PRODUCT} variables={{ text }}>
          {addProduct => (
            <div>
              <Search
                placeholder="input text"
                enterButton="Add"
                onChange={this.handleInput}
                onSearch={addProduct}
                allowClear
              />
            </div>
          )}
        </Mutation>
      </Fragment>
    
    )
  }
}

export default AddProduct;
