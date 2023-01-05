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
    },
    User: {
        favoriteMovies: () => {
            return MovieList.filter(movie => movie.yearOfPublication >= 2010 && movie.yearOfPublication <= 2012) 
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const newId = UserList.length +1
            user.id = newId
            
            UserList.push(user)

            return  user
        }
    }
}

module.exports = {resolvers}