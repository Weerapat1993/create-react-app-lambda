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
  mutation AddProduct($text: String!) {
    addProduct(text: $text) @client
  }
`;

export const TOGGLE_PRODUCT = gql`
  mutation ToggleProduct($id: String!) {
    toggleProduct(id: $id) @client
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(id: $id) @client
  }
`;
