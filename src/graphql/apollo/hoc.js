import { graphql } from 'react-apollo'
import { GET_SWAPI } from './gql'

export const withGetPeopleQuery = (config = {}) => graphql(GET_SWAPI, config)