// server.js
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Rewrite /api/* calls to json-server.
server.use('/api', router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
