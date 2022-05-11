// node myFile.js

const pendingTimers = [1, 2, 3, 4]
const pendingOSTasks = [1, 2, 3, 4, 5, 6, 7]
const pendingOperations = [1, 2]

//myFile.runContents();

function shouldContinue() {

  if (pendingOSTasks.length > 0) {
    pendingOSTasks.shift()

  } else if (pendingTimers.length > 0) {
    pendingTimers.shift()

  } else if (pendingOperations.length > 0) {
    pendingOperations.shift()
  }

  return (
    pendingTimers.length +
    pendingOSTasks.length +
    pendingOperations.length
  )
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
  console.log('Executing... ', shouldContinue())
}


// exit back to terminal