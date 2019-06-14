import React from 'react'
import { Table } from 'antd'
import { withSchema } from './SchemaHOC';
import {
  withGetProductQuery, 
  withDeleteProductMutation,
  withAddProductMutation, 
  withUpdateProductMutation,
} from '../../graphql/product'
import EditTable from './EditTable'

const ProductList = ({ dataList, loading, onAdd, onUpdate, onDelete }) => (
  <EditTable
    columns={[
      {
        title: 'ID',
        dataIndex: '_id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        width: 120,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
        width: 150,
        editable: true,
      },
    ]}
    defaultAddValues={{
      name: 'Iphone XR',
      price: 29900
    }}
    data={dataList} 
    loading={loading}
    onAdd={onAdd}
    onUpdate={onUpdate}
    onDelete={onDelete}
  >
    {(components, columns) => {
      return (
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          dataSource={dataList}
          loading={loading}
          columns={columns}
          scroll={{ x: 600 }}
          pagination={{ pageSize: 10 }}
        />
      )
    }}
  </EditTable>
);

export default withSchema(
  'products',
  [
    withGetProductQuery({
      options: () => ({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
      })
    }),
    withAddProductMutation({ name: 'addSchema', options: { refetchQueries: ['GetProducts'] } }),
    withUpdateProductMutation({ name: 'updateSchema', options: { refetchQueries: ['GetProducts'] } }),
    withDeleteProductMutation({ name: 'deleteSchema', options: { refetchQueries: ['GetProducts'] } }),
  ],
  ProductList
)