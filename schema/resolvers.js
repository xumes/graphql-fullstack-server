const {UserList, MovieList} = require('./../FakeData')

const resolvers = {
    Query: {
        users: () =>  {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = UserList.find((user) => {return user.id == id})

            return user
        },
        movies: () =>  {
            return MovieList
        },
        movie: (parent, args) => {
            const movie = MovieList.find((movie) => {return movie.name == args.name})

            return movie
        },
    }
}

module.exports = {resolvers}