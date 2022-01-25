const nemo = ['nemo'];
const {
    performance
  } = require('perf_hooks');
// a function to findNemo in an array




function findNemo(array) {
    // used a for loop to find nemo
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
           console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log(`Call to find nemo took: ${t1 - t0} milliseconds`);
}

findNemo(nemo);