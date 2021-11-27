const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {

    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
    }

    getUsers = async () => {
        const users = await this.get('/users')

        return users.map(async ({ id, name, email, active, role }) => ({
            id, name, email, active, role: await this.get(`/roles/${role}`)
        }))
    }

    getUserById = async (id) => {

        const { role, active, name, email } = await this.get(`/users/${id}`)

        return ({ id, active, name, email, role: await this.get(`/roles/${role}`) })
    }


}

module.exports = UsersAPI