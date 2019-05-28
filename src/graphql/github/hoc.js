import { graphql } from 'react-apollo';
import { GET_GITHUB_REPO } from './gql'
// eslint-disable-next-line no-unused-vars
import { ConfigQuery } from '../../docs/graphqlConfig'

/**
 * @param {ConfigQuery} config
 * @return {Function}
 */
export const withGetGithubRepoQuery = (config = {}) => graphql(GET_GITHUB_REPO, config)
