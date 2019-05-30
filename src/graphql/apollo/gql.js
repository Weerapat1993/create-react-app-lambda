import gql from 'graphql-tag'

export const GET_SWAPI = gql`
  query GetSwapi($type: String!, $path: String!) {
    person @rest(type: $type, path: $path) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld
      url
    }
  }
`
