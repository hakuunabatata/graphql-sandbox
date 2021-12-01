const { ApolloServer } = require('apollo-server')
// const { mergeTypeDefs } = require('graphql-tools')

const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers')
const UsersAPI = require('./user/datasource/user')
const classroomSchema = require('./classroom/schema/classroom.graphql')
const classroomResolvers = require('./classroom/resolvers/classroomResolvers')
// const ClassRoomsAPI = require('./classroom/datasource/classroom')



const typeDefs = [userSchema, classroomSchema]

const resolvers = [userResolvers, classroomResolvers]

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: () => ({
    usersAPI: new UsersAPI(),
    // classRoomsAPI: new ClassRoomsAPI()
  })
})

server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))