import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    cohort(id: String!): Cohort!
    cohorts: [Cohort!]
    getCohortUsers: [User!]
  }

  extend type Mutation {
    createCohort(name: String!, startingDate: String!): Cohort!
    addUserToCohort(cohortId: String!, userId: String!): [User!]
    removeUserFromCohort(cohortId: String!, userId: String!): [User!]
  }

  type Cohort {
    _id: ID!
    name: String
    startingDate: String
    users: [User!]
  }
`;
