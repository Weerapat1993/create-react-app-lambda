import React from 'react';
import { Layout, Breadcrumb } from 'antd';
// import { AddTodo, TodoList } from './Todo';
import styled from 'styled-components';
import { ProductList, AddProduct } from './Product';
import { connect } from '../utils/connect';
import { LambdaDemo } from './LambdaDemo';

const { Content, Footer } = Layout
const WhiteCard = styled.div`
  padding: 24px;
  min-height: 280px;
  width: 100%;
  background: white;
`
const CustomContent = styled(Content)`
  margin: auto;
  max-width: 996px;
`
 
const Home = (props) => {
  const { products } = props
  console.log(props)
  return (
    <Layout style={{ height: '100vh' }}>
      <CustomContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <WhiteCard>
          {/* <h1>Todo List</h1>
          <AddTodo />
          <TodoList todos={todos} /> */}
          <h1>Product List</h1>
          <LambdaDemo />
          <AddProduct />
          <br />
          <ProductList products={products} />
          {/* <pre>
            {JSON.stringify(props, null, '  ')}
          </pre> */}
        </WhiteCard>
      </CustomContent>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  products: state.products,
})

export default connect(mapStateToProps)(Home);
