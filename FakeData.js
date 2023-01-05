const UserList = [
    {
        id: 1,
        name: 'Reggie',
        username: 'reggie',
        age: 20,
        nationality: 'CANADA',
        friends: [
            {
                id: 3,
                name: 'Vin',
                username: 'vin',
                age: 12,
                nationality: 'BRAZIL'
            },
            {
                id: 4,
                name: 'San',
                username: 'smlimasantos',
                age: 30,
                nationality: 'BRAZIL'
            },
        ]
    },
    {
        id: 2,
        name: 'Reginaldo',
        username: 'reginaldo',
        age: 20,
        nationality: 'BRAZIL'
    },
    {
        id: 3,
        name: 'Vin',
        username: 'vin',
        age: 12,
        nationality: 'BRAZIL'
    },
    {
        id: 4,
        name: 'San',
        username: 'smlimasantos',
        age: 30,
        nationality: 'BRAZIL',
        friends: [
            {
                id: 2,
                name: 'Reginaldo',
                username: 'reginaldo',
                age: 20,
                nationality: 'BRAZIL'
            },
        ]
    },
    {
        id: 5,
        name: 'Jon',
        username: 'jon',
        age: 25,
        nationality: 'UNITED_STATES'
    }
]

const MovieList = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', yearOfPublication: 1, isInTheaters: false },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', yearOfPublication: 2011, isInTheaters: false },
	{ id: 3, name: 'Harry Potter and the Goblet of Fire', yearOfPublication: 2011, isInTheaters: false },
	{ id: 4, name: 'The Fellowship of the Ring', yearOfPublication: 2012, isInTheaters: false },
	{ id: 5, name: 'The Two Towers', yearOfPublication: 2012, isInTheaters: false },
	{ id: 6, name: 'The Return of the King', yearOfPublication: 2012, isInTheaters: false },
	{ id: 7, name: 'The Way of Shadows', yearOfPublication: 2013, isInTheaters: false },
	{ id: 8, name: 'Beyond the Shadows', yearOfPublication: 2013, isInTheaters: false }
]

module.exports = {UserList, MovieList}