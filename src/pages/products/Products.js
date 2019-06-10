import React, { PureComponent } from 'react';
import { get } from 'lodash'
import { withGetProductQuery } from '../../graphql/product'

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
    return (
      <div>
        <pre>{JSON.stringify(products, null, '  ')}</pre>
      </div>
    )
  }
}

export default withGetProductQuery()(ProductList)