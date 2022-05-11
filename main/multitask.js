process.env.UV_THREADPOOL_SIZE  = 2

const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function doRequest(id) {
  https.request('https://www.google.com', response => {
    response.on('data', () => {})
    response.on('end', () => {
      console.log(`Request ${id} - Time of exec(ms): `, Date.now() - start)
    })
  }).end()
}(1)

function doHash(id) {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
	console.log(`Hash ${id} - Time of exec(ms): `, Date.now() - start)
  })
}

doRequest(1)

fs.readFile('multitask.js', 'utf8', () => {
	console.log(`FS: Time of exec(ms): `, Date.now() - start)
})

doHash(1)
doHash(2)
doHash(3)
doHash(4)