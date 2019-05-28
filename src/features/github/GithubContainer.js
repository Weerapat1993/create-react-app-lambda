import React, { PureComponent } from 'react';
import { List } from 'antd'
import { get } from 'lodash'
import { withGetGithubRepoQuery } from '../../graphql/github'

class GithubContainer extends PureComponent {
  render() {
    const { data } = this.props
    const products = get(data, 'github', []);
    return (
      <List
        header={<b>Product List</b>}
        bordered
        dataSource={products}
        renderItem={item => (
          <List.Item>
            {item.name}
          </List.Item>
        )}
      />
    )
  }
}

export default withGetGithubRepoQuery({ 
  options: (props) => ({
    variables: {
      name: 'Weerapat1993'
    },
  }) 
})(GithubContainer);
