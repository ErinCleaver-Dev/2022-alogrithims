function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    })

    boxes.forEach(function(boxes) {
        console.log(boxes);
    })
}

// O(2n) => O(n)
// in big O you care about how the line moves.  

function compressBoxesTwice2(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    })

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    })
}

// These are considered two different inputs 
// Since their are two inputs the notation is O(a + b)