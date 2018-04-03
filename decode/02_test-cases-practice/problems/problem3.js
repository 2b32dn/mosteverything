var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [1,1],
  [1,4],
  [2,5],
  [8,1],
  [10,6]
]

let outputs = [
  6,
  0,
  2,
  5,
  7,
  9,
  16
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  // ==>
  // arr = [2,4]
  // arr[0] = 2
  // arr[1] = 4
  let sum = arr[0] + arr[1];
  // sum = 6
  return sum;
}


function runTest(i) {
    // case 0
    // expected = output[0] = 6
    var expected = outputs[i];
    // actual = f(inputs[0]) = f([2,4]) = 6
    var actual = f(inputs[i]);


    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
