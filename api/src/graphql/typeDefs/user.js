import { gql } from 'apollo-server-express';

export default gql`

  type Query {
    profile(id: String!): User!
    users: [User!]
    refreshToken: Auth!
    login(email: String! , password: String!): Auth!
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
    ): User!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Auth {
    user: User
    token: String!
    refreshToken: String!
  }
`;