

const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        addUser: async (root, user, { dataSources }) => dataSources.usersAPI.addUser(user),
        alterUser: async (root, user, { dataSources }) => dataSources.usersAPI.alterUser(user),
    }
}

module.exports = userResolvers