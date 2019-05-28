import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_TODO } from '../../graphql/todo/gql';
import { Input } from 'antd';

const { Search } = Input

class AddTodo extends PureComponent {
  state = {
    text: '',
  }

  handleInput = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { text } = this.state;
    return (
      <Mutation mutation={ADD_TODO} variables={{ text }}>
        {addTodo => (
          <div>
            <Search
              placeholder="input text"
              enterButton="Add"
              onChange={this.handleInput}
              onSearch={addTodo}
              allowClear
            />
          </div>
        )}
      </Mutation>
    )
  }
}

export default AddTodo;
