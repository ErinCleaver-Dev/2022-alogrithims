const nemo = ['nemo'];
const {
    performance
  } = require('perf_hooks');
// a function to findNemo in an array


// testing with a larger list 
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100).fill('nemo');
const larger = new Array(1000).fill('nemo');
const testing10000 = new Array(10000).fill('nemo');
const testing100000 = new Array(100000).fill('nemo');

function findNemo(array, string) {
    // used a for loop to find nemo
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
           console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log(`Testing ${string}: ${t1 - t0} milliseconds`);
}
// Call to find nemo took: .228 milliseconds 
// call for everyone took: .212 millisection
findNemo(nemo, 'nemo');
// testing the per
findNemo(everyone, "multiple values");
// .2254 millisecounds
findNemo(nemo, 'one value array' );
// 0.18 millisecounds
findNemo(large, 'testing large array' );
//16.78 milliseconds
findNemo(larger, 'testing large array' );
//129.42 milliseconds
findNemo(testing10000, 'testing large array' );
//984.064 milliseconds
findNemo(testing100000, 'testing large array' );
//9307.591 milliseconds