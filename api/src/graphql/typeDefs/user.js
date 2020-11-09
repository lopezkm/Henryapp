import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    profile(id: String!): User!
    users: [User!]
    refreshToken: Auth!
    login(email: String!, password: String!): Auth!
  }

  extend type Mutation {
    register(name: String!, email: String!, password: String!): User!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    inscriptionDate: String!
  }

  type Auth {
    user: User
    token: String!
    refreshToken: String!
  }
`;
