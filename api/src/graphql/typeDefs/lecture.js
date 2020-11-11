import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    lecture(id: String!): Lecture!
    lectures: [Lecture!]
  }

  extend type Mutation {
    createLecture(
      name: String!
      embededLink: String!
      description: String!
      teoriaLink: String!
    ): Lecture!
  }

  type Lecture {
    _id: ID!
    name: String!
    embededLink: String!
    description: String!
    teoriaLink: String!
  }
`;
