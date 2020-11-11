import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    profile(id: String!): User!
    users: [User!]
    refreshToken: AuthUser!
    login(email: String!, password: String!): AuthUser!
  }

  extend type Mutation {
    register(
      name: String!
      lastname: String!
      email: String!
      password: String!
    ): AuthUser!

    updateUser(id: String!, user: String!): Cohort!
  }

  type User {
    _id: ID!
    name: String!
    lastname: String!
    email: String!
    inscriptionDate: String!
  }

  type AuthUser {
    user: User
    token: String!
    refreshToken: String!
  }
`;
