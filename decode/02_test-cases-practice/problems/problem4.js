var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["Hi", 0],
  ["Dickson",1],
  ["Odin",2],
  ["Thor", 3],
  ["Loki",0],
  ["Hilda",4]
]

let outputs = [
  "o",
  undefined,
  "H",
  "i",
  "i",
  "r",
  "L",
  "a"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  if( arr[0] === ""){
    return undefined;
  } else {
    return arr[0].charAt(arr[1]);
  }
}

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
