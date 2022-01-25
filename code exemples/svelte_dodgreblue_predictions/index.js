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
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
           console.log('Found Nemo!');
        }
    }
}
