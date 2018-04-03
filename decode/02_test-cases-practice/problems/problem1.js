var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "",
  "abc",
  "def",
  "ghi",
  "jkl"
]

let outputs = [
  undefined,
  "a",
  "d",
  "g",
  "j"
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
  if(str === ""){
    return undefined;
  } else{
    return str.charAt(0);
  }
}

function runTest(i) {
    var expected = outputs[i];
    console.log(expected);
    var actual = f(inputs[i]);
    console.log(actual);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
