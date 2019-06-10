import { gql } from 'apollo-server-lambda';
import mongoose from 'mongoose'
import Product from './schema'

export const productTypeDef = gql`
  type Product {
    _id: ID!
    name: String!
    price: Int!
  }

  input AddProduct {
    name: String!
    price: Int!
  }
  
  input UpdateProduct {
    id: String!
    name: String
    price: Int
  }

  input DeleteProduct {
    id: String!
  }

  extend type Query {
    products: [Product]
  }

  extend type Mutation {
    addProduct(input: AddProduct): Product
    updateProduct(input: UpdateProduct): Product
    deleteProduct(input: DeleteProduct): StatusCode
  }
`;

export const productResolvers = {
  Query: {
    products: async (root, args, context) => {
      context.callbackWaitsForEmptyEventLoop = false
      // Use Product.Model to find all products
      const products = await Product.find()
      return products
    }
  },
  Mutation: {
    addProduct: async (root, { input }, context) => {
      context.callbackWaitsForEmptyEventLoop = false
      const { name, price } = input
      const id = mongoose.Types.ObjectId()
      const product = {
        _id: id,
        name,
        price,
        __v: 0
      }
      await Product.create(product)
      return product
    },
    updateProduct: async (root, { input }, context) => {
      context.callbackWaitsForEmptyEventLoop = false
      const { id } = input
      const product = await Product.findOneAndUpdate({ _id: id }, input)
      return {
        _id: id,
        ...product,
        ...input,
      }
    },
    deleteProduct: async (root, { input }, context) => {
      context.callbackWaitsForEmptyEventLoop = false
      const { id } = input
      await Product.findOneAndDelete({ _id: id })
      return {
        code: 200
      }
    },
  }
}