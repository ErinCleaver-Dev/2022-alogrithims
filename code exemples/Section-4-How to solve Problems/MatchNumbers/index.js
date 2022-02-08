let numberArray1 = [1, 2, 3, 9] 
let numberArray2 = [1, 2, 4, 4]

// Find the sum of the arrays that is equal to 8

const findNumber = (numberArray, number) => {
    
    for (let j = numberArray.length - 1; j >= 0; j--) {
        for(let i = 0; i < numberArray.length; i++) {
            if (numberArray[j] + numberArray[i] == number) {
                return `The sums of numberArray[j] + numberArray[i] is equal to ${numberArray[j] + numberArray[i]}`
            } else if(numberArray[j] > number || numberArray[i] > number) {
                break
            } 
            
        }
        
    }
    return `The sum of ${number} was not found in the array`

}

console.log('lop 1')
console.log(findNumber(numberArray1, 8)) 
console.log('lop 2')
console.log(findNumber(numberArray2, 8)) 

console.log('lop 3')
console.log(findNumber([1, 3, 5, 9], 8))

console.log(findNumber([1, -1, 5, 9], 8))