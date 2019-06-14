import gql from 'graphql-tag'

export const GET_USER = gql`
  query GetUsers {
    users {
      _id
      name
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($input: UserByIdInput) {
    user(input: $input) {
      _id
      name
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($input: AddUserInput) {
    addUser(input: $input) {
      _id
      name
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      _id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($input: UserByIdInput) {
    deleteUser(input: $input) {
      code
    }
  }
`;
