import React from 'react';
import { Input, InputNumber, Form, Select } from 'antd';
import { get } from 'lodash'

const { Option } = Select;

export const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

export const EditableFormRow = Form.create()(EditableRow);

export class EditableCell extends React.Component {
  getInput = () => {
    const lists = get(this.props, 'lists', [])
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    if (this.props.inputType === 'select-multiple') {
      return (
        <Select mode="multiple" style={{ width: '100%' }}>
          {lists.map(item => (
            <Option key={item.value}>{item.title}</Option>
          ))}
        </Select>
      );
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