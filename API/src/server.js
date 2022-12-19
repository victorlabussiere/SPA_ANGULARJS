require('dotenv').config({ path: 'API/.env' })
const express = require('express')
const cors = require('cors') // -> Especification to deal with APIs
const bodyParser = require('body-parser') // -> parse all body requests

const routes = require('./routes')

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }))

server.use('/api', routes) // prefix '/api' to all routes

server.listen(process.env.PORT, () => {
    console.log('servidor rodando em: http://locahost:' + process.env.PORT)
})