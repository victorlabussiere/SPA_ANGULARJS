const assert = require('assert')

const Db = require('../src/db')
const PicsServices = require('../src/services/MyPicsServices')
const PicsController = require('../src/controllers/MyPicsController')

describe('MySQL Class tests suits', async function () {
    const control = new PicsController(new PicsServices(new Db))

    it('1) Connection\n \ \ \ \ --> Must return a "connected" or "authenticated" status from database', async () => {
        const databaseConnection = control.db.state
        const serviceConnection = control.db.state
        const controllersConnection = control.db.state

        assert.deepEqual(databaseConnection && serviceConnection && controllersConnection, 'connected' || 'authenticated')
    })

    it('2) ID Query\n \ \ \ \ --> Must test queryById method returning an object by its ID', async () => {
        const MOCK_ID = 1
        const result = await control.show(MOCK_ID)
        assert.deepEqual(await result.publi_id, MOCK_ID)
    })
})