import React from 'react'
import { Query } from 'react-apollo'
import { Table } from 'antd'
import { get, omit } from 'lodash'
import { withSchema } from '../../features/schemaTable';
import {
  withGetCategoryQuery, 
  withAddCategoryMutation,
  withUpdateCategoryMutation,
  withDeleteCategoryMutation,
} from '../../graphql/category'
import EditTable from '../../features/schemaTable/EditTable'
import { GET_PRODUCT } from '../../graphql/product/gql';

const CategoryList = ({ dataList, loading, onAdd, onUpdate, onDelete }) => (
  <Query query={GET_PRODUCT} fetchPolicy="cache-and-network">
    {({ data }) => {
      const lists = get(data, 'products', []).map(item => ({
        value: item._id,
        title: item.name,
      }))
      return (
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
            {
              title: 'Products',
              dataIndex: 'productIds',
              inputType: 'select-multiple',
              editable: true,
              lists,
            },
          ]}
          defaultAddValues={{
            name: 'Category Name',
            productIds: [],
            products: [],
          }}
          data={dataList} 
          loading={loading}
          onAdd={onAdd}
          onUpdate={(row) => onUpdate(omit(row, ['products']))}
          onDelete={onDelete}
          lists={lists}
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
      )
    }}
  </Query>
  
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