import React, { Fragment } from 'react';
import { Button, Popconfirm } from 'antd';
import styled from 'styled-components';
import { EditableCell, EditableContext, EditableFormRow } from './Editable'

const TextLink = styled.a`
  margin-right: 8px;
`;

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingKey: ''
    }
    this.columns = [
      ...props.columns,
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
    ]
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
    const { defaultAddValues } = this.props
    this.props.onAdd(defaultAddValues)
  };

  save = (form, key) => {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const lists = [...this.props.data];
      const rowField = lists.find(item => key === item.key);
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
    // const { data, loading } = this.props
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
          Add
        </Button>
        {this.props.children(components, columns)}
      </div>
    );
  }
}

export default EditableTable