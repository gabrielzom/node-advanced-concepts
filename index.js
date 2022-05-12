const express = require('express')
const app = express();
const port = 8000 || process.env.PORT
const crypto = require('crypto')

app.get('/', (request, response) => {

  let token = 'Bearer '
  const buffer = crypto.pbkdf2Sync('Sk!0n3.S0lut1on5', (Math.random()).toString(), 1000, 32, 'sha256')
  const { data } = buffer.toJSON()
  data.forEach((item) => { token += item })

  response.setHeader('Authorization', token)
  response.status(200).send('Worked !')
})


app.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`)
})