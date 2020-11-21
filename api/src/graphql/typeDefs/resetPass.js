import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    resetPass(email: String!, url: String!): resetPass!
  }

  type resetPass {
    mailed: Boolean!
  }
`;
