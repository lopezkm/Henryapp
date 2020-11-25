import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    sendEmail(email: String!, url: String!): sendEmail!
  }
  extend type Mutation {
    uploadCSV(file: Upload!): sendEmail!
  }

  type sendEmail {
    mailed: Boolean!
  }
`;
