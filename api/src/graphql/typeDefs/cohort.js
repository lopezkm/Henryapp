import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    cohort(id: String!): Cohort!
    cohorts: [Cohort!]
    getCohortUsers: [User!]
  }

  extend type Mutation {
    createCohort(name: String!, startingDate: String!): Cohort!
    updateCohort(_id: String! name: String!, startingDate: String! instructor: String!): Cohort!
    addUserToCohort(cohortId: String!, userId: String!): Cohort!
    addInstructorToCohort(instructorName: String!, userId: String!): Cohort!
    removeUserFromCohort(cohortId: String!, userId: String!): [User!]
    removeInstructorToCohort(cohortId: String!): Cohort!
    deleteCohort(id: String!): Cohort!
  }

  type Message {
    ok: Boolean!
  }

  type Cohort {
    _id: ID!
    name: String!
    startingDate: String!
    instructor: String
    students: [User]
  }
`;
