const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {

    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
        this.customResponse = {
            code: 200,
            message: 'Success'
        }
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

    addUser = async ({ name, email, active, role: roleName, createdAt }) => {

        const roles = await this.get(`/roles`)


        const [role] = roles.filter(({ type }) => type === roleName)


        const user = await this.post('/users', { name, email, active, role: role.id, createdAt })


        return { ...user, role }
    }

    alterUser = async (id, { name, email, active, role: roleName }) => {
        const [role] = await this.get(`roles?type=${roleName}`)

        const user = await this.put(`/users/${id}`, { name, email, active, role: role.id })


        return { ...this.customResponse, user: { ...user, role } }
    }

    deleteUser = async (id) => {
        console.log(id)
        await this.delete(`/users/${id}`)

        return this.customResponse
    }

}

module.exports = UsersAPI