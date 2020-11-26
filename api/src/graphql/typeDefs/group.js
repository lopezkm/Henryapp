import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    group(id: String!): Group!
    groups: [Group!]
    getGroupUsers(groupId: String!): [User!]
    ppUsers(groupId: String!, pairProgramming: String!): [User!]
  }

  extend type Mutation {
    createGroup(name: String!, PM: String!): Group!
    addUserToGroup(groupId: String!, userId: String!): [User!]
    removeUserFromGroup(groupId: String!, userId: String!): [User!]
    addGroupToCohort(cohortId: String!, groupId: String!): Group!
    addUserToPP(id: String!, pairProgramming: String!): [User!]
  }

  type Group {
    _id: ID!
    name: String
    PM: String
  }
`;

// borre de grupo el campo meetlink: String, y de createGroup(meetlink: String!) OMAR