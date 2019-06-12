import { graphql } from 'react-apollo';
import { GET_CATEGORY, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from './gql'
// eslint-disable-next-line no-unused-vars
import { ConfigMutation, ConfigQuery } from '../../docs/graphqlConfig'

/**
 * @param {ConfigQuery} config
 * @return {Function}
 */
export const withGetCategoryQuery = (config = {}) => graphql(GET_CATEGORY, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withAddCategoryMutation = (config = {}) => graphql(ADD_CATEGORY, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withUpdateCategoryMutation = (config = {}) => graphql(UPDATE_CATEGORY, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withDeleteCategoryMutation = (config = {}) => graphql(DELETE_CATEGORY, config)
