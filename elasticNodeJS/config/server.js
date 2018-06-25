const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const carregarDados = require('./elasticdb/elasticdb')
const server  = express()
const port = process.env.PORT || 3000

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

routes(server)

server.listen(port, (err) =>{
    if(err){        
        return console.log("Algo deu errado", err);
    }
    console.log(`Servidor online escutando na porta ${port}`);
    carregarDados.carga();
});