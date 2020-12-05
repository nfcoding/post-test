/* eslint-disable consistent-return */

import path from 'path'
import fileUpload from 'express-fileupload'
import jsonServer from 'json-server'
import auth from 'json-server-auth'
import swaggerDist from 'swagger-ui-dist'

import config from './config'

const server = jsonServer.create()
server.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))
server.use(jsonServer.bodyParser)
const router = jsonServer.router('./server/db.json')
const middlewares = jsonServer.defaults()
const swaggerPath = swaggerDist.absolutePath()

server.get('/swagger-ui.css', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui.css')))
server.get('/swagger-ui.css.map', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui.css.map')))
server.get('/swagger-ui-bundle.js', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui-bundle.js')))
server.get('/swagger-ui-bundle.js.map', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui-bundle.js.map')))

server.db = router.db
const rules = auth.rewriter({
  '/v1/users*': '/600/users$1',
  '/v1/posts*': '/660/posts$1',
  '/v1/register': '/register',
  '/v1/login': '/login',
  '/v1/reset': '/reset',
  '/v1/upload': '/upload',
})
const [compression, cors, , logger, def] = middlewares

server.get('/openapi.json', (req, res) => res.sendFile(path.join(__dirname, 'api', 'learn.json')))
server.get('/auth.json', (req, res) => res.sendFile(path.join(__dirname, 'api', 'auth.json')))
server.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

server.use([compression, cors, logger, def])
server.use(rules)
server.use(auth)
// custom start

server.post('/upload', (req, res) => {
  console.log(req.body.name)
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were upload')
  }
  const { avatar } = req.files
  avatar.mv(path.join(__dirname, 'uploads', 'file.png'), (err) => {
    if (err) return res.status(500).send(err)
    res.send('File iploaded!')
  })
})

server.get('/reset', (req, res) => {
  const { db } = server
  db.set('users', []).write()
  db.set('posts', []).write()
  db.set('tasks', []).write()
  res.send('reset success')
})
// custom end
server.use(router)

server.listen(
  config.port,
  () => console.log(`API server running at ${config.port}`),
)
