process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster')

// Is the file being executed in mater mode ?
if (cluster.isMaster) {
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()

} else {
  const express = require('express')
  const app = express();
  const port = 8000 || process.env.PORTS
  const crypto = require('crypto')
  var token = 'Bearer '
  
  app.get('/', (request, response) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      response.send('Hi there !')
    })
  })


  app.get('/fast', (request, response) => {
    const { data } = (crypto.pbkdf2Sync('Sk!0n3.S0lut1on5', (Math.random()).toString(), 1000, 32, 'sha256')).toJSON()
    data.forEach((item) => { token += item })
  
    response.setHeader('Authorization', token)
    response.status(200).send('This was fast !')
  })
  
  
  
  app.listen(port, () => {
    console.log(`Server listen in http://localhost:${port}`)
  })
}


