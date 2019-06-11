import gql from 'graphql-tag'

export const GET_PRODUCT = gql`
  query GetProducts {
    products {
      _id
      name
      price
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($input: AddProduct) {
    addProduct(input: $input) {
      _id
      name
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProduct) {
    updateProduct(input: $input) {
      _id
      name
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($input: DeleteProduct) {
    deleteProduct(input: $input) {
      code
    }
  }
`;
