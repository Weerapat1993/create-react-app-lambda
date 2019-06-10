import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { get } from 'lodash'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '../../routes'

const { Header, Content, Footer, Sider } = Layout;

const Logo = styled.div`
  background: rgba(255, 255, 255, 0.2);
  height: 32px;
  margin: 16px;
`;

class App extends PureComponent {
  handleLink = (path) => {
    this.props.history.push(path)
  }

  render() {
    const { location } = this.props;
    const { pathname } = location
    const noFooters = ['/playground']
    const menus = [
      {
        key: 1,
        title: 'Home',
        icon: 'home',
        to: '/'
      },
      {
        key: 2,
        title: 'GraphQL Playground',
        icon: 'radar-chart',
        to: '/playground'
      },
      {
        key: 3,
        title: 'About',
        icon: 'user',
        to: '/about'
      },
      {
        key: 4,
        title: 'Github',
        icon: 'github',
        to: '/github'
      },
    ];
    const currentMenu = menus.filter(item => item.to === pathname)
    console.log(this.props)
    const defaultMenu = get(currentMenu, '0.key', 1).toString();
    const isFooter = !noFooters.some(value => value === pathname)
    console.log(defaultMenu)
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            
          }}
        >
          <Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultMenu]}>
            {menus.map(item => (
              <Menu.Item key={item.key} onClick={() => this.handleLink(item.to)}>
                <Icon type={item.icon} />
                <span className="nav-text">{item.title}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes />
          </Content>
          {isFooter ? (
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          ) : null}
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
