import gql from 'graphql-tag'

export const GET_GITHUB_REPO = gql`
  query GetGithubRepo($name: String!) {
    github(name: $name) {
      id
      name
      full_name
      description
      html_url
      owner {
        avatar_url
      }
      language
      stargazers_count
      watchers_count
      open_issues
    }
  }
`