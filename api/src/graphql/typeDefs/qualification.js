import { gql } from "apollo-server-express";

export default gql`
  type Qualification {
    grade: Int!
    commentary: String!
    average: Int!
  }
`;
