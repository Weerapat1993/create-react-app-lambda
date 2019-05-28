import { graphql } from 'react-apollo';
import { GET_POSTS } from './gql'
// eslint-disable-next-line no-unused-vars
import { ConfigQuery } from '../../docs/graphqlConfig'

/**
 * @param {ConfigQuery} config
 * @return {Function}
 */
export const withGetPostsQuery = (config = {}) => graphql(GET_POSTS, config)
