import { gql } from "apollo-server-express"

export default gql`
    extend type Query{
        sprint(id: String!): Sprint!
        sprints: [Sprint!]
    }

    extend type Mutation {
        createSprint(name: String!, duration: Float!, description: String! ): Sprint!
        addLectureToSprint(
            sprintId: String!,
            lectureId: String!
        ): Sprint!
        removeLectureToSprint(
            sprintId: String!,
            lectureId: String!
        ): Sprint!
    }

    type Sprint{
        _id: ID!
        name: String!
        duration: Float!
        description: String!
        lecture: [Lecture!]
    }
`;