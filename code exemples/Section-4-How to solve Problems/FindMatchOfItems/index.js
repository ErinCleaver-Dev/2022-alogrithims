// Given 2 arrays, create a function that let's a user know (true /false) wather these two arrays contain any common items.  


//Example 1
const letterArray1 = ['a', 'b', 'c', 'x'];
const letterArray2 = ['z', 'y', 'i'];
// would return false

const letterArray3 = ['z', 'y', 'x'];

// The simplest way to do it would be two for lops. But htat would not be very effient and go to the O(n^2)

const simpleMatch = (array1, array2) => {
    // checks to see if every point on the array is the same
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                return true
            } 
        }
    }

    return false

}

console.log('Example 1')
console.log(`The match for ${simpleMatch(letterArray1, letterArray2)}`)

console.log('Example 2')
console.log(`The match for ${simpleMatch(letterArray1, letterArray3)}`)