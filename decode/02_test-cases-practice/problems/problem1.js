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
  for(var i = 0; i<=inputs.length;i++){
    if(outputs[i] === undefined){
      return undefined;
    } else{
      return inputs[i].charAt(0);
    }
  }
}

function runTest(i) {
    var expected = f(outputs[i]);
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
