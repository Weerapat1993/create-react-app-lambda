import React from 'react';
import { Table } from 'antd';

const columns = [
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
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    width: 100,
  },
];

const TableExample = ({ data, loading }) => (
  <Table columns={columns} dataSource={data} loading={loading} scroll={{ x: 600 }} />
)

export default TableExample;