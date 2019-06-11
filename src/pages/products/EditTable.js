import React, { Fragment } from 'react';
import { Table, Input, Button, InputNumber, Popconfirm, Form } from 'antd';
import styled from 'styled-components';

const TextLink = styled.a`
  margin-right: 8px;
`;

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingKey: ''
    }
    this.columns = [
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
      {
        title: 'Actions',
        dataIndex: 'actions',
        width: 160,
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <TextLink onClick={() => this.save(form, record.key)}>
                    Save
                  </TextLink>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                <TextLink>Cancel</TextLink>
              </Popconfirm>
            </span>
          ) : (
            <Fragment>
              <TextLink disabled={editingKey !== ''} onClick={() => this.edit(record.key)} style={{ marginRight: 8 }}>
                Edit
              </TextLink>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <TextLink>Delete</TextLink>
              </Popconfirm>
            </Fragment>
          );
        }
      },
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  edit(key) {
    this.setState({ editingKey: key });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  handleDelete = key => {
    this.props.onDelete(key)
  };

  handleAdd = (input) => {
    this.props.onAdd({
      name: 'Iphone XR',
      price: 29900
    })
  };

  save = (form, key) => {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const products = [...this.props.data];
      const rowField = products.find(item => key === item.key);
      const newData = {
        ...rowField,
        ...row,
      }
      this.props.onUpdate(newData)
      this.setState({ editingKey: '' });
    });
  }

  handleSave = row => {
    this.props.onUpdate(row)
  };

  render() {
    const { data, loading } = this.props
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'price' ? 'number' : 'text',
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          // handleSave: this.handleSave,
          editing: this.isEditing(record),
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" icon="plus" style={{ marginBottom: 16 }}>
          Add Product
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          dataSource={data}
          loading={loading}
          columns={columns}
          scroll={{ x: 600 }}
          pagination={{ pageSize: 10 }}
        />
      </div>
    );
  }
}

export default EditableTable