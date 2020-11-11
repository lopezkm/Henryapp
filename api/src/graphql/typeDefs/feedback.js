import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    feedback(id: String!): Feedback!
    feedbacks: [Feedback!]
  }

  extend type Mutation {
    createFeedback(average: Float!, softSkill: Float!, tecnicalSkill: Float!, leader: Boolean! ): Feedback!
    deleteFeedback(average: Float!, softSkill: Float!, tecnicalSkill: Float!, leader: Boolean! ): Feedback!
  }

  type Feedback {
    _id: ID!
    average: Float!
    softSkill: Float!
    tecnicalSkill: Float!
    leader: Boolean!
  }
`;