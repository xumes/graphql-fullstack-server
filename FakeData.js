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

module.exports = {UserList}