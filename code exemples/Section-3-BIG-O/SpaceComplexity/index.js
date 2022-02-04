const boo = (n) => {
    for (let i = 0; i < n.length; i++) {
        console.log('Boooo!');
    }
}

let array = [1, 2, 3, 4, 5]

boo(array) // O(n) // space completely 0(1)


function displayHi(n) {
    let hiArray = []
    for (let i = 0; i < n; i++) {
        hiArray = 'hi';
    }

    return hiArray;
}

displayHi(6)  // O(n) 
//created a new array and a data structre 