// Given 2 arrays, create a function that let's a user know (true /false) wather these two arrays contain any common items.  


//Example 1
const letterArray1 = ['a', 'b', 'c', 'x'];
const letterArray2 = ['z', 'y', 'i'];
// would return false

const letterArray3 = ['z', 'y', 'x'];


// 2 parameters that are always arrays and have no size limit 
// Returns true or false

// The simplest way to do it would be two for loops. But that would not be very effient and go to the O(n^2)
// const simpleMatch = (array1, array2) => {
//     // checks to see if every point on the array is the same
//     for (let i = 0; i < array1.length; i++) {
//         // Checks each stop in a for to see if i is equal to j
//         //  The arrays can be different sizes.  
//         for (let j = 0; j < array2.length; j++) {

//             // returns if it finds any values that match and exits the loop
//             if(array1[i] === array2[j]) {
//                 return true
//             } 
//         }
//     }

//     // returns false if their are no matches.  
//     return false
// }
//space completetly of 0(1)


/* change the array to an obejct ==> obj {
    a: true, b: true, c: true, d: true }
    array2[index] === obj.properties
*/

// 

// const simpleMatch = (array1, array2) => {
//     /*
//        1.  Loop through the first array and create a object where properties are equal to true. 
//        2. loop through the secound array and check if it exits on the created object.
//     */


//     // figure out how to break the function
//     // can be broken by passing in values or null

//     // only numbers, booleans, and strings will work in this function.  
//     numbersObject = {};
//     // loop through each item in a array and check if it is found
  
//     for (let i = 0; i < array1.length; i++) {
//         if(!numbersObject[array1[i]]) {
//             // adds the the value to the array
//             numbersObject[`${array1[i]}`] = true;
//         }
//     }

//     // loop through the secound array and check if it exits on the created object.
//     for (let j = 0; j< array2.length; j++) {
//         if (numbersObject[array2[j]]) {
//             return true
//         }
//     }

//     return false

// } 
// O(a + b) => O(n) When it comes to time complexity is better.  
//space completetly of 0(a)

const simpleMatch = (array1, array2) => {
    // the simplest way to do this in javascript version 6
    return array1.some(item => array2.includes(item));
} 

console.log('Example 1')
console.log(`The match for the array ${simpleMatch(letterArray1, letterArray2)}`)

console.log('Example 2')
console.log(`The match for the array ${simpleMatch(letterArray1, letterArray3)}`)