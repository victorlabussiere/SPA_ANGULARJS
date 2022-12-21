const Services = require('../services/MyPicsServices')

class MyPicsController extends Services {
    constructor() {
        super()
    }

    async index() {
        let publiList = await this.queryAll()
        let data = { error: '', result: [] }

        await publiList.map(i => data.result.push({ ...i }))
        return await data
    }

    async show(id) {
        let publiList = await this.queryById(id)
        const [filterById] = publiList.filter(i => i.publi_id === id)
        let data = { ...filterById }

        return await data
    }
}

module.exports = MyPicsController