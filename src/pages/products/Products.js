import React, { PureComponent } from 'react';
import { Button, Row, Col } from 'antd'
import { get } from 'lodash'
import styled from 'styled-components'
import { Card } from '../../components'
import { withGetProductQuery } from '../../graphql/product'
import TableExample from './TableExample';

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

  

  render() {
    const { data } = this.props
    const products = get(data, 'products', [])
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
          
          <TableExample data={products} loading={loading} />
        </Card.Body>
      </Card>
    )
  }
}

export default withGetProductQuery()(ProductList)