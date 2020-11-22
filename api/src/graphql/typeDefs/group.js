import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    group(id: String!): Group!
    groups: [Group!]
    getGroupUsers(groupId: String!): [User!]
  }

  extend type Mutation {
    createGroup(name: String!, meetLink: String!): Group!
    addUserToGroup(groupId: String!, userId: String!): [User!]
    removeUserFromGroup(groupId: String!, userId: String!): [User!]
    addGroupToCohort(cohortId: String!, groupId: String!): Group!
  }

  type Group {
    _id: ID!
    name: String
    meetLink: String
  }
`;
