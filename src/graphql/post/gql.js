import gql from 'graphql-tag'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      votes
    }
  }
`