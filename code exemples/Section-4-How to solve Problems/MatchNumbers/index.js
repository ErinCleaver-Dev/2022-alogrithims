let numberArray1 = [1, 2, 3, 9] 
let numberArray2 = [1, 2, 4, 4]

// Find the sum of the arrays that is equal to 8
// navie approach 
const findNumber = (numberArray, number) => {
    
    for (let j = numberArray.length - 1; j >= 0; j--) {
        for(let i = 0; i < numberArray.length; i++) {
            if (numberArray[j] + numberArray[i] == number) {
                return true
            } else if(numberArray[j] > number || numberArray[i] > number) {
                break
            } 
            
        }
    }
    return false

}
// better approach 
findNumber2 = (numbers, number) => {

    const numberSet = new Set();
    const length = numbers.length;

    for (let i = 0; i < length; i++) {
        if(numberSet.has(numbers[i])) {
            return true
        }
        numberSet.add(number - numbers[i]);
    }

    return false

}


console.log('lop 1')
console.log(findNumber2(numberArray1, 8)) 
console.log('lop 2')
console.log(findNumber2(numberArray2, 8)) 

console.log('lop 3')
console.log(findNumber2([1, 3, 5, 9], 8))
console.log('lop 4')
console.log(findNumber2([1, -1, 5, 9], 8))