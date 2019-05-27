import React from 'react';
import { Layout, Breadcrumb } from 'antd';
// import { AddTodo, TodoList } from './Todo';
import { ProductList, AddProduct } from './Product';
import { connect } from '../utils/connect';
import { LambdaDemo } from './LambdaDemo';

const { Content, Footer } = Layout
 
const Home = (props) => {
  const { products } = props
  console.log(props)
  return (
    <Layout style={{ height: '100vh' }}>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
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

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  products: state.products,
})

export default connect(mapStateToProps)(Home);
