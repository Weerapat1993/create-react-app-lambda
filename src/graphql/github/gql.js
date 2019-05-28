import gql from 'graphql-tag'

export const GET_GITHUB_REPO = gql`
  query GetGithubRepo($name: String!) {
    github(name: $name) {
      id
      name
      full_name
    }
  }
`