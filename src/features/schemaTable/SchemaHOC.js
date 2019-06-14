
import React, { PureComponent } from 'react';
import { Button, Row, Col } from 'antd'
import { get, omit } from 'lodash'
import { compose } from 'react-apollo';
import { Card, Align } from '../../components'
import { notificationWithIcon } from '../../utils/notificationWithIcon'

export const withSchema = (queryName, withGraphqlCRUD, WrapperComponent) => {
  class SchemaHOC extends PureComponent {
    handleAdd = (input) => {
      const { addSchema } = this.props;
      addSchema({
        variables: {
          input
        },
      }).then(() => {
        notificationWithIcon('success', `Add ${queryName} is successfully.`)
      }).catch((e) => {
        notificationWithIcon('error', e.message)
      })
    }
  
    handleUpdate = (row) => {
      const { updateSchema } = this.props;
      const input = omit(row, ['key', '__typename', '_id'])
      updateSchema({
        variables: {
          input: {
            id: row._id,
            ...input,
          }
        },
      }).then(() => {
        notificationWithIcon('success', `Update ${queryName} is successfully.`)
      }).catch((e) => {
        notificationWithIcon('error', e.message)
      })
  
    }
  
    handleDelete = (key) => {
      const { deleteSchema } = this.props;
      deleteSchema({
        variables: {
          input: {
            id: key,
          }
        }
      }).then(() => {
        notificationWithIcon('success', `Delete ${queryName} is successfully.`)
      }).catch((e) => {
        notificationWithIcon('error', e.message)
      })
    }
  
    render() {
      const { data } = this.props
      const products = get(data, queryName, []).map(item => ({ ...item, key: item._id }))
      const loading = get(data, 'loading', false);
      return (
        <Card>
          <Card.Body>
            <Row>
              <Col span={12}>
                <h1>{queryName}</h1>
              </Col>
              <Col span={12}>
                <Align value="right">
                  <Button 
                    onClick={() => this.props.data.refetch()} 
                    loading={loading} 
                    type="primary"
                    shape="round"
                    icon="redo"
                  >
                    Refresh
                  </Button>
                  <br />
                  <br />
                </Align>
              </Col>
            </Row>
            <WrapperComponent 
              {...this.props}
              dataList={products}
              loading={loading}
              onAdd={this.handleAdd}
              onUpdate={this.handleUpdate}
              onDelete={this.handleDelete}
            />
          </Card.Body>
        </Card>
      )
    }
  }
  return compose(...withGraphqlCRUD)(SchemaHOC);
}
