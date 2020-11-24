import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    imageUploader(file: Upload!): Picture!
  }
  type Picture {
    src: String!
  }
`;
