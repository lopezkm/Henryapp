import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    photoUpload(file: Upload!): Picture!
  }
  type Picture {
    _id: ID!
    name: String!
    src: String!
    thumbsrc: String!
    height: Int!
    width: Int!
    vertical: Boolean!
  }
`;
