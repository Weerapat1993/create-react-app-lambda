import React, { PureComponent } from 'react';
import { Button, Row, Col, notification } from 'antd'
import { get, omit } from 'lodash'
import styled from 'styled-components'
import { compose } from 'react-apollo';
import { Card } from '../../components'
import {
  withGetProductQuery, 
  withDeleteProductMutation,
  withAddProductMutation, 
  withUpdateProductMutation,
} from '../../graphql/product'
import EditTable from './EditTable';

const openNotificationWithIcon = (type, description) => {
  notification[type]({
    message: 'Notification',
    description,
  });
};

const Align = styled.div`
  text-align: ${props => props.value};
`;

class ProductList extends PureComponent {
  componentDidMount() {
    const { data } = this.props
    const products = get(data, 'products', [])
    if(!products.length) {
      this.props.data.refetch()
    }
  }

  handleAdd = (input) => {
    const { addProduct } = this.props;
    addProduct({
      variables: {
        input
      },
    }).then(() => {
      openNotificationWithIcon('success', 'Add product is successfully.')
    }).catch((e) => {
      openNotificationWithIcon('error', e.message)
    })
  }

  handleUpdate = (row) => {
    const { updateProduct } = this.props;
    console.log(row)
    const input = omit(row, ['key', '__typename', '_id'])
    updateProduct({
      variables: {
        input: {
          id: row._id,
          ...input,
          price: parseInt(input.price),
        }
      },
    }).then(() => {
      openNotificationWithIcon('success', 'Update product is successfully.')
    }).catch((e) => {
      openNotificationWithIcon('error', e.message)
    })

  }

  handleDelete = (key) => {
    const { deleteProduct } = this.props;
    deleteProduct({
      variables: {
        input: {
          id: key,
        }
      }
    }).then(() => {
      openNotificationWithIcon('success', 'Delete product is successfully.')
    }).catch((e) => {
      openNotificationWithIcon('error', e.message)
    })
  }

  render() {
    const { data } = this.props
    const products = get(data, 'products', []).map(item => ({ ...item, key: item._id }))
    const loading = get(data, 'loading', false);
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col span={12}>
              <h1>Products</h1>
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
          <EditTable 
            data={products} 
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

export default compose(
  withGetProductQuery({ notifyOnNetworkStatusChange: true }),
  withAddProductMutation({ name: 'addProduct', options: { refetchQueries: ['GetProducts'] } }),
  withUpdateProductMutation({ name: 'updateProduct', options: { refetchQueries: ['GetProducts'] } }),
  withDeleteProductMutation({ name: 'deleteProduct', options: { refetchQueries: ['GetProducts'] } }),
)(ProductList)