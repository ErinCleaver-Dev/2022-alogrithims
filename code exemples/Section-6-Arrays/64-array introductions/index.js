const strings = ['a', 'b', 'c', 'd'];
// 4, 32 bit system 4 * 4 = 16 bytes of storage.  

// Grab the thrid item on memory
strings[2]

// push used to add something to the end of the array.
// the push operation is a Big O notation of O(1)
strings.push('e') 

// pop remove something from the end of the array.
// the pop operation is a Big O notation of O(1)
strings.pop(); 
strings.pop();

// unshift adds something to the beging of the array
// the unshift operation is a Big O notation of O(n)
strings.unshift('e')

// you use splace to add something to the middle of the array
// the splace operation is a Big O notation of O(n)

strings.splice(2, 0, 'alien')

console.log(strings)