const users = [
    {
        name: 'Teodoro',
        active: true,
    },
    {
        name: 'Sampaio',
        active: false,
    },
]

const userResolvers = {
    Query: {
        users: () => users,
        firstUser: () => users[0]
    }
}

module.exports = userResolvers