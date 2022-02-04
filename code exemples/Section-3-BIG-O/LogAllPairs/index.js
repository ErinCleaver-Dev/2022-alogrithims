// O(n^2)
// Log all apirs of an array
const boxes = [1, 2, 3, 4, 5]

//Create a function called log all pairs 
function logAllPairsOfArray(array) {

    // use a for loop to log the pairs 
    for(let i = 0; i < array.length; i++) {
        //use a secound for loop through the array
        for(let j = 0; j < array.length; j++) {
            console.log(`Pairs: (${array[i]}, ${array[j]})`)
        }
    }
}

logAllPairsOfArray(boxes)
console.log('test')

// the big O for this because it is a nested loop is O(n^2)
// O(n^2) - Quadratic Time
// It is considered Horrible in big O notation