// node myFile.js

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

myFile.runContents();

function shouldContinue() {
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  )
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
  console.log('Executing... ', shouldContinue())
}


// exit back to terminal