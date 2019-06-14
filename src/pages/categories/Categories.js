import React from 'react'
import { Table } from 'antd'
import { withSchema } from '../../features/schemaTable';
import {
  withGetCategoryQuery, 
  withAddCategoryMutation,
  withUpdateCategoryMutation,
  withDeleteCategoryMutation,
} from '../../graphql/category'
import EditTable from '../../features/schemaTable/EditTable'

const CategoryList = ({ dataList, loading, onAdd, onUpdate, onDelete }) => (
  <EditTable
    columns={[
      {
        title: 'ID',
        dataIndex: '_id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a._id - b._id,
        width: 120,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        inputType: 'text',
        editable: true,
      },
    ]}
    defaultAddValues={{
      name: 'Category Name',
      products: [],
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
  'categories',
  [
    withGetCategoryQuery({
      options: () => ({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
      })
    }),
    withAddCategoryMutation({ name: 'addSchema', options: { refetchQueries: ['GetCategories'] } }),
    withUpdateCategoryMutation({ name: 'updateSchema', options: { refetchQueries: ['GetCategories'] } }),
    withDeleteCategoryMutation({ name: 'deleteSchema', options: { refetchQueries: ['GetCategories'] } }),
  ],
  CategoryList
)