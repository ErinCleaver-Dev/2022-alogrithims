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

// In C++ uses static arrays instead of dynamic arrays.
//int a[20]; array with 20 elements
//int b[5] {1, 2, 3, 4};  array with 5 elements

// arrays in python, java, and javascript work like dynamic arrays
const strings1 = ['a', 'b', 'c', 'd'];
//apened can be 0(n)
