import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    cohort(id: String!): Cohort!
    cohorts: [Cohort!]
  }

  extend type Mutation {
    createCohort(name: String!, startingDate: String!): Cohort!
    addUserToCohort(cohortId: String!, userId: String!): Cohort!
    removeUserFromCohort(cohortId: String! , userId: String!): Cohort!
  }

  type Cohort {
    _id: ID!
    name: String!
    startingDate: String!
    users: [User!]
  }
`;
