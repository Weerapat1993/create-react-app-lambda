import gql from 'graphql-tag'

export const GET_CATEGORY = gql`
  query GetCategories {
    categories {
      _id
      name
      productIds
      products {
        _id
        name
        price
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation AddCategory($input: AddCategory) {
    addCategory(input: $input) {
      _id
      name
      productIds
      products {
        _id
        name
        price
      }
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($input: UpdateCategory) {
    updateCategory(input: $input) {
      _id
      name
      productIds
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($input: DeleteCategory) {
    deleteCategory(input: $input) {
      code
    }
  }
`;
