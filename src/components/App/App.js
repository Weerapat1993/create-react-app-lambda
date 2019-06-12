import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { get } from 'lodash'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '../../routes'
import { Playground } from '../Playground';

const { Header, Content, Sider } = Layout;

const Logo = styled.div`
  background: rgba(255, 255, 255, 0.2);
  height: 32px;
  margin: 16px;
`;

class App extends PureComponent {
  state = {
    isPlayground: false,
    isMobile: false,
  }

  handleLink = (path) => {
    this.props.history.push(path)
  }

  handlePlayground = (bool) => {
    this.setState({ isPlayground: bool })
  }

  handleBreakpoint = (bool) => {
    this.setState({ isMobile: bool })
  }

  render() {
    const { location } = this.props;
    const { isPlayground, isMobile} = this.state;
    const { pathname } = location
    // const noFooters = ['/playground']
    const menus = [
      {
        key: 1,
        title: 'Home',
        icon: 'home',
        to: '/'
      },
      {
        key: 3,
        title: 'Products',
        icon: 'database',
        to: '/products'
      },
      {
        key: 4,
        title: 'Categories',
        icon: 'database',
        to: '/categories'
      },
      {
        key: 5,
        title: 'About',
        icon: 'user',
        to: '/about'
      },
      {
        key: 6,
        title: 'Github',
        icon: 'github',
        to: '/github'
      },
    ];
    const currentMenu = menus.filter(item => item.to === pathname)
    const defaultMenu = get(currentMenu, '0.key', 1).toString();
    // const isFooter = !noFooters.some(value => value === pathname)
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            this.handleBreakpoint(broken)
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
          <Playground visible={isPlayground} isMobile={isMobile} onClose={this.handlePlayground} />
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
