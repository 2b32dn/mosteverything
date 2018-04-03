var assert = require('assert');

// we need 5 test cases.
let inputs = [
    "",
    "qddw",
    "as",
    "zx",
    "ecr"
]

let outputs = [
  undefined,
  "w",
  "s",
  "x",
  "r"
]

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    if(str === ""){
        return undefined;
    } else{
        return str.slice(str.length - 1);
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
