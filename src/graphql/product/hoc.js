import { graphql } from 'react-apollo';
import { GET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './gql'
// eslint-disable-next-line no-unused-vars
import { ConfigMutation, ConfigQuery } from '../../docs/graphqlConfig'

/**
 * @param {ConfigQuery} config
 * @return {Function}
 */
export const withGetProductQuery = (config = {}) => graphql(GET_PRODUCT, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withAddProductMutation = (config = {}) => graphql(ADD_PRODUCT, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withUpdateProductMutation = (config = {}) => graphql(UPDATE_PRODUCT, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withDeleteProductMutation = (config = {}) => graphql(DELETE_PRODUCT, config)
