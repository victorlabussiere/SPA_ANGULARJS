const Db = require('../db')

class PicsServices extends Db {

    constructor() {
        super()
    }

    async queryAll() {
        const result = new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM publi', (err, response) => {
                if (err) throw reject(Error)
                resolve(response)
            })
        })
        return await result
    }

    async queryById(id) {
        const result = new Promise((res, rej) => {
            this.db.query(`SELECT * FROM publi WHERE publi_id = ${id}`, (err, response) => {
                if (err) throw rej(Error)
                res(response)
            })
        })

        return await result
    }
}

module.exports = PicsServices