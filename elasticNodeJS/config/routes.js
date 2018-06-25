const elasticdb = require('./elasticdb/elasticdb')

module.exports = serverRouter = (server) => {
    server.get('/api/todos', (req,res) => {
        elasticdb.getAllContent().then((result) => {res.json(result)});
    });
}