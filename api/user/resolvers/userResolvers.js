const { GraphQLScalarType } = require('graphql')

const userResolvers = {
    RoleTypes: {
        DOCENTE: 'DOCENTE',
        ESTUDANTE: 'ESTUDANTE',
        COORDENACAO: 'COORDENACAO'
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'datetime string in format ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: ({ value }) => new Date(value)
    }),
    Query: {
        users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
    },
    Mutation: {
        addUser: async (root, { user }, { dataSources }) => dataSources.usersAPI.addUser(user),
        alterUser: async (root, { user, id }, { dataSources }) => dataSources.usersAPI.alterUser(id, user),
        deleteUser: async (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id),
    }
}

module.exports = userResolvers