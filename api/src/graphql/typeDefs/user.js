import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]
    refreshToken: AuthUser!
    login(email: String!, password: String!): AuthUser!
    search(query: String!): [User!]
    getUserByRol(rol: String!): [User!]
    me: User!
  }

  extend type Mutation {
    register(
      name: String!
      lastname: String!
      email: String!
      password: String!
    ): AuthUser!

    updateUser(
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

    deleteUser(id: String!): User!
  }

  type User {
    _id: ID!
    name: String!
    lastname: String!
    email: String!
    inscriptionDate: String!
    rol: String!
    title: String
    shortDescription: String
    description: String
    gitHubLink: String
    link: String
    cohort: Cohort
    group: Group
    pairProgramming: String
    feedbacks: [Feedback]
    qualifications: [Qualification]
  }

  type AuthUser {
    user: User
    token: String!
    refreshToken: String!
  }
`;
/*feedbacks: [Feedback]
    qualifications: [Qualification]*/
