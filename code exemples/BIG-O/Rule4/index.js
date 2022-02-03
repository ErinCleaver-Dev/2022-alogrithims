const PrintNumbersANDPairSums = (numbers) => {
    // prints all of the numbers
    console.log('These are the numbers');
    numbers.forEach((numbers) => {
        console.log(numbers)
    })

    console.log('These are the numbers');
    numbers.forEach((firstNumber) => {
        numbers.forEach((secondNumber) => {
            console.log(`Sum of Pairs:  ${firstNumber + secondNumber}`);
        })
    })
}

// O(n^2 ) drop the n because it is less then important