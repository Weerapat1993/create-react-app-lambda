import React from 'react'
import { Table } from 'antd'
import { withSchema } from '../../features/schemaTable';
import {
  withGetUserQuery,
  withAddUserMutation,
  withUpdateUserMutation,
  withDeleteUserMutation,
} from '../../graphql/user'
import EditTable from '../../features/schemaTable/EditTable'

const UserList = ({ dataList, loading, onAdd, onUpdate, onDelete }) => (
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
        title: 'Email',
        dataIndex: 'email',
        inputType: 'text',
        editable: true,
      },
    ]}
    defaultAddValues={{
      name: 'Name',
      email: 'email@example.com'
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
  'users',
  [
    withGetUserQuery({
      options: () => ({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
      })
    }),
    withAddUserMutation({ name: 'addSchema', options: { refetchQueries: ['GetUsers'] } }),
    withUpdateUserMutation({ name: 'updateSchema', options: { refetchQueries: ['GetUsers'] } }),
    withDeleteUserMutation({ name: 'deleteSchema', options: { refetchQueries: ['GetUsers'] } }),
  ],
  UserList
)