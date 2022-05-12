const cluster = require('cluster')
const express = require('express')
const app = express();
const port = 8000 || process.env.PORT
const crypto = require('crypto')
var token = 'Bearer '

// Is the file being executed in mater mode ?
if (cluster.isMaster) {
  cluster.fork()
  // cluster.fork()
  // cluster.fork()
  // cluster.fork()

} else {
  function doWork(duration) {
    const start = Date.now()
    while( (Date.now() - start) < duration) {
  
    }
  }
  
  app.get('/', (request, response) => {
    doWork(5000)
    const { data } = (crypto.pbkdf2Sync('Sk!0n3.S0lut1on5', (Math.random()).toString(), 1000, 32, 'sha256')).toJSON()
    data.forEach((item) => { token += item })
  
    response.setHeader('Authorization', token)
    response.status(200).send('This was slow')
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


