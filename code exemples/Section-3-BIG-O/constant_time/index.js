let boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7"]


// no matter how many times the boxes are in the array we always get the first one.  Meaning that the time frame is always the same.  

// Always getting the first item in the array
function compressFirstBox(boxes) {
    console.log(boxes[0])
}

compressFirstBox(boxes);


// function to get the first two items in the array.

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]) // 0(1)
    console.log(boxes[1]) // 0(1)

}
console.log(FirstTwoBoxes(boxes)) // running 0(2)
// This is still a linear function because the time should not change and will still be a flat line.
// This is considered constant time since the amount of time should no change.  
// 0(1) is predictable and considered exelent.  