const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port,  (err) => {
    if(err) {
       return console.log(`Erro ao tentar se conectar ao servidor`, err);
    }
    console.log(`Backend rodando na porta ${port}`);
})

module.exports = server
