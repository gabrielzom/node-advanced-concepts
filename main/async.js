
const https = require('https')

const start = Date.now()

function doRequest(id) {
  https.request('https://www.google.com', response => {
    response.on('data', () => {})
    response.on('end', () => {
      console.log(`Request ${id} - Time of execution (ms): `, Date.now() - start)
    })
  }).end()
}

doRequest(1)
doRequest(2)
doRequest(3)
doRequest(4)
doRequest(5)
doRequest(6)
doRequest(7)
doRequest(8)

// Out of thread.
doRequest(9)