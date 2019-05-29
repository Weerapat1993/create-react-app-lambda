import React, { PureComponent } from 'react';
import { List, Avatar, Icon, Modal } from 'antd'
import { get } from 'lodash'
import { withGetGithubRepoQuery } from '../../graphql/github'
import { modalError } from '../../components'

const colorLanguage = (lang) => {
  switch(lang) {
    case 'JavaScript':
      return '#ffcf02'
    case 'PHP':
      return '#4e5c95'
    case 'Shell':
      return '#88e050'
    default:
      return '#999'
  }
}

const IconText = ({ type, text, color, iconRight }) => {
  const styleDefault = iconRight ? { marginLeft: 8 } : { marginRight: 8 } 
  const iconStyles = color ? { color, ...styleDefault } : styleDefault
  if(iconRight) {
    return (
      <span>
        {text}
        <Icon type={type} style={iconStyles} />
      </span>
    )
  }
  return (
    <span>
      <Icon type={type} style={iconStyles} />
      {text}
    </span>
  )
}

class GithubList extends PureComponent {
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props
    const isError = Boolean(data.error) && !Boolean(prevProps.data.error)
    if(isError) {
      modalError('Not Found')
    }
  }

  handleClickItem = (url) => {
    const title = 'Do you Want to open github profile?'
    Modal.confirm({
      title,
      content: url,
      onOk() {
        window.open(url)
      },
      onCancel() {
        
      },
    });
  }

  render() {
    const { data, name } = this.props
    const products = get(data, 'github', []);
    const loading = get(data, 'loading', false);
    return (
      <List
        header={<b>Username : {name}</b>}
        bordered
        loading={loading}
        dataSource={products}
        renderItem={item => (
          <List.Item
            actions={[
              <IconText key='star' type="star" text={item.stargazers_count} color='#ffcf02' />, 
              <IconText key='eye' type="eye" text={item.watchers_count} />, 
              <IconText key='message' type="message" text={item.open_issues} />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={get(item, 'owner.avatar_url', '')} />}
              title={<span onClick={() => this.handleClickItem(item.html_url)}>{item.name}</span>}
              description={item.description}
            />
            <div>
              <IconText 
                type="check-circle" 
                text={item.language || 'None'} 
                color={colorLanguage(item.language)} 
                iconRight
              />
            </div>
          </List.Item>
        )}
      />
    )
  }
}

export default withGetGithubRepoQuery({ 
  skip: (props) => !props.name,
  options: (props) => ({
    variables: {
      name: props.name
    },
  }) 
})(GithubList);
