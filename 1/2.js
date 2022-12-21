// 2) write a function that returns a promise that REJECTS after a 5 second timeout, 
// with an error. call this function and, using .catch syntax, log the result of 
// the promise to .catch

function rejectAfterTimeout() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => { reject(Error("Error! Time limit reached!")); }, 5 * 1000);
    });
}

rejectAfterTimeout()
    .catch((error) => {
        console.log(error);
    });



