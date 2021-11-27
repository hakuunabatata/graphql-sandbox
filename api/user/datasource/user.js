const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {

    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
    }

    getUsers = async () => this.get('/users')


}

module.exports = UsersAPI