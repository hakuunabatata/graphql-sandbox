import { ApolloServer, gql } from 'apollo-server'

const users = [
  {
    name: 'Teodoro',
    active: true,
  },
  {
    name: 'Sampaio',
    active: false,
  },
]

const typeDefs = gql`
  type User {
    name: String!
    active: Boolean!
    email: String
  }
`

const server = new ApolloServer({ typeDefs, resolvers })
