import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '../../routes'

const { Content, Footer } = Layout;
const CustomContent = styled(Content)`
  margin: auto;
  max-width: 996px;
  overflow-y: auto;
`

const App = () => (
  <Layout style={{ height: '100vh' }}>
    <CustomContent>
      <Breadcrumb style={{ margin: '16px 10px' }}>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Routes />
    </CustomContent>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  
);

export default App;
