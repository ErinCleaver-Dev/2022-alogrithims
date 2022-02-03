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
    // the for loop has a big 0 notation of 0(n) or Linear Time

    // Going thorugh the entire array to find a name.  
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
           console.log('Found Nemo!');
           // Break can be use to make a array more effient
           // Worse case is if it is at the very end.
           break;

        }
    }
}

const findNemo2 = (array) => {
    array.forEach( item => {
        if(item === 'nemo') {
            console.log('Found Nemo!');
        }
    })
}
console.log("Find Nemo 2")
findNemo2(everyone)
const findNemo3 = (array) => {
    for (let item of array) {
        if(item === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}
console.log("Find Nemo 3")
findNemo3(everyone)