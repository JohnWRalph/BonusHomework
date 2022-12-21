// 3) write a function that chains together 3 promises using .then. Each promise adds together the previous result, 
// adds 5 to it, and then resolves with that new sum. the final .then should have have a callback with a value of 15, 
// since we started with 0, and added 5 to it in 3 different promises.

function chainPromises(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, 1000);
    });
}

async function sumPromises() {
    const result = chainPromises(5)
        .then(result => {
            console.log(result);
            return result;
        })
        .then(result => {
            result += 5;
            console.log(result);
            return result;
        })
        .then(result => {
            result += 5;
            console.log(result);
            return result;
        });
}

sumPromises();