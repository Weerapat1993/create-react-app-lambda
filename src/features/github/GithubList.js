import React, { PureComponent } from 'react';
import { List, Avatar, Icon } from 'antd'
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

  render() {
    const { data, name } = this.props
    const products = get(data, 'github', []);
    return (
      <List
        header={<b>Username : {name}</b>}
        bordered
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={get(item, 'owner.avatar_url', '')} />}
              title={<a onClick={() => console.log(item.html_url)} target='_blank'>{item.name}</a>}
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
