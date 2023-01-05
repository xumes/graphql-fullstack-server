const {gql} = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int
        nationality: Nationality
        friends: [User!]
    }

    type Query {
        users: [User!]
    }

    enum Nationality {
        BRAZIL
        CANADA
        UNITED_STATES
        PORTUGAL
    }
`

module.exports = { typeDefs }