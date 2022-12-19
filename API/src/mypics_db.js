const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect(error => {
    try {
        console.log('Conexão estabelecida ao banco de dados:', process.env.DB_NAME)
    }
    catch {
        throw console.error('Erro na tentativa de conectar com banco de dados', error.message)
    }
})

module.exports = connection