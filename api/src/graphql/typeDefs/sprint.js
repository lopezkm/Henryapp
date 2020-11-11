import { gql } from 'apollo-server-express'
import { Query } from 'mongoose'
import Sprint from '../../models/Sprint'

export default gql`
    extend default Query{
        sprint(id: String!): Sprint!
        sprint: [Sprint!]
    }

    extend type Mutation {
        createSprint(name: String!, duration: Number!, description: String! ): Sprint!
        removeSprint(sprintId: String!): Sprint!
    }

    type Sprint{
        _id: ID!
        name: String!
        duration: Number!
        description: String!
    }
    `;