const {UserList} = require('./../FakeData')

const resolvers = {
    Query: {
        users: () =>  {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = UserList.find((user) => {return user.id == id})

            return user
        }
    }
}

module.exports = {resolvers}