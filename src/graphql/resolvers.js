import * as productResolvers from './product/resolvers';
import * as todoResolvers from './todo/resolvers'

export const resolvers = {
  ...todoResolvers,
  ...productResolvers,
}