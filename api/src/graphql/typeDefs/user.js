import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    profile(id: String!): User!
    users: [User!]
    refreshToken: AuthUser!
    login(email: String!, password: String!): AuthUser!
    search(query: String!): [User!]
    getUserByRol(rol: String!): [User!]
  }

  extend type Mutation {
    register(
      name: String!
      lastname: String!
      email: String!
      password: String!
    ): AuthUser!

    updateUser(
      id: String!
      name: String
      lastname: String
      email: String
      title: String
      shortDescription: String
      description: String
      gitHubLink: String
      link: String
    ): User!

    changeRol(id: String!, rol: String!): User!
  }

  type User {
    _id: ID!
    name: String!
    lastname: String!
    email: String!
    inscriptionDate: String!
    rol: String!
    picture: Picture!
    title: String
    shortDescription: String
    description: String
    gitHubLink: String
    link: String
  }

  type AuthUser {
    user: User
    token: String!
    refreshToken: String!
  }
`;
