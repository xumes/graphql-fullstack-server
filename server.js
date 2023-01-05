const {ApolloServer} = require('apollo-server')
const { typeDefs } = require('./schema/type-defs')
const {resolvers} = require('./schema/resolvers')
const server = new ApolloServer({typeDefs, resolvers})

server.listen(3000).then(({url}) => {
    console.log(`The API is running at ${url} :-)`)
})