const classrooms = [
    {
        id: 1,
        description: 'basic'
    },
    {
        id: 2,
        description: 'medium'
    }
]


const classRoomResolvers = {
    Query: {
        classrooms: (parent, args, context, info) => classrooms,
        classroom: (parent, { id }, context, info) => classrooms.filter(({ id: classID }) => classID === id),
    }
}


module.exports = classRoomResolvers