import { graphql } from 'react-apollo';
import { GET_USER, GET_USER_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER } from './gql'
// eslint-disable-next-line no-unused-vars
import { ConfigMutation, ConfigQuery } from '../../docs/graphqlConfig'

/**
 * @param {ConfigQuery} config
 * @return {Function}
 */
export const withGetUserQuery = (config = {}) => graphql(GET_USER, config)

/**
 * @param {ConfigQuery} config
 * @return {Function}
 */
export const withGetUserByIdQuery = (config = {}) => graphql(GET_USER_BY_ID, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withAddUserMutation = (config = {}) => graphql(ADD_USER, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withUpdateUserMutation = (config = {}) => graphql(UPDATE_USER, config)

/**
 * @param {ConfigMutation} config
 * @return {Function}
 */
export const withDeleteUserMutation = (config = {}) => graphql(DELETE_USER, config)
