// 1)write a function that returns a promise that resolves after a 5 second timeout with the word "hello".
//  call this function and, using .then syntax, log the result of the promise in the callback to .then

// 2) write a function that returns a promise that REJECTS after a 5 second timeout, with an error. 
// call this function and, using .catch syntax, log the result of the promise to .catch

// 3) write a function that chains together 3 promises using .then. Each promise adds together the previous result, 
// adds 5 to it, and then resolves with that new sum. the final .then should have have a callback with a value of 15, 
// since we started with 0, and added 5 to it in 3 different promises.

function resolveAfterTimeout(greeting) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(greeting), 5 * 1000);
    })
}

async function logAfterTimeout() {
    const result = resolveAfterTimeout("hello").then(anything => {

        console.log(anything);

    })
}

logAfterTimeout();