const nemo = ['nemo'];

// a function to findNemo in an array

function findNemo(array) {
    // used a for loop to find nemo
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
           console.log('Found Nemo!');
        }
    }
}

findNemo(nemo);