require('dotenv').config({ path: "API/.env" })

class Database {
    #config = require('../environments')
    #database = require('mysql')

    constructor() {
        this.db = this.#database.createConnection(this.#config)
        this.connection = this.db.connect(err => err ? new Error : true)
    }
}

module.exports = Database