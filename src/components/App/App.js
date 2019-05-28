import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '../../routes'

const { Content } = Layout;
const CustomContent = styled(Content)`
  margin: auto;
  max-width: 996px;
`

const App = () => (
  <Layout style={{ background: 'white' }}>
    <CustomContent>
      <Breadcrumb style={{ margin: '16px 10px' }}>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/github">Github</Link></Breadcrumb.Item>
      </Breadcrumb>
      <Routes />
    </CustomContent>
  </Layout>
  
);

export default App;
