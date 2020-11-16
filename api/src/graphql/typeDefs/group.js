import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    group(id: String!): Group!
    groups: [Group!]
  }

  extend type Mutation {
    createGroup(name: String!, startingDate: String!): Group!
    addUserToGroup(groupId: String!, userId: String!): Group!
    removeUserFromGroup(groupId: String! , userId: String!): Group!
  }

  type Group {
    _id: ID!
    name: String!
    meetLink: String!
    users: [User!]
  }
`;