// quantity of avaible threads in libuv

process.env.UV_THREADPOOL_SIZE = 8

const crypto = require('crypto')

const start = Date.now()


// Testing with 4 threads of libuv.

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('6:', Date.now() - start)
})
  
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('7:', Date.now() - start)
})
  
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('8:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('9:', Date.now() - start)
})
// I believe see the 5rd function execute after the four first.