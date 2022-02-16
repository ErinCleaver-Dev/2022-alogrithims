// in javascript arrays are just objects with indexs

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    // returns data from memory
    get(index) {
        return this.data[index]
    }

    // add a value to the array
    // takes in an item to the array
    push(item) {
        // adds the item at the 0 index
        this.data[this.length] = item;
        this.length++;

        // The push object in javascript returns the lenght of the array
        return this.length;
    }

    //removes the last item in the array
    pop() {
     // gets the last point in the array
     const lastItem = this.data[this.length - 1];
     // delets the item from the array object 
     delete this.data[this.length - 1]
     this.length--;
     return lastItem
    }

    //going to add the delete method to the array which is 0(n)
}

const newArray = new MyArray();

newArray.push('hi')
newArray.push('you')
console.log(newArray)
newArray.push('!')
newArray.pop();
newArray.pop();
console.log('remove from array')
console.log(newArray)
