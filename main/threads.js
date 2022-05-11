// quantity of avaible threads in libuv

const crypto = require('crypto')

const start = Date.now()

function doEncrypt(id) {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Encrypt ${id} - Time of execution (ms): `, Date.now() - start)
  })
}

doEncrypt(1)
doEncrypt(2)
doEncrypt(3)
doEncrypt(4)
doEncrypt(5)
doEncrypt(6)
doEncrypt(7)
doEncrypt(8)

// Out of thread.
doEncrypt(9)

// I believe see the 9rd function execute after the four first.