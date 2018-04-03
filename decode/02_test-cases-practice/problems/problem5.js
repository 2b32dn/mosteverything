var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [3,0],
  [2,5],
  [5,3],
  [9,8]
]

let outputs = [
  14,
  0,
  10,
  15,
  72
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
    return inputs[0][1] * inputs
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
