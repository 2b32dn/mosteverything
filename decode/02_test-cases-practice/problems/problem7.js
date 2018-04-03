var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["yo", 5],
  ["ha", 6],
  ["g", 10],
  ["lo", 7],
  ["hi", -5],
  ["EZ", 4],
  ["gitgud",2]
]

let outputs = [
  "yoyoyoyoyo",
  "hahahahahaha",
  "gggggggggg",
  "lololololololo",
  undefined,
  "EZEZEZEZ",
  "gitgudgitgud"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    if(arr[1] > 0){
        return arr[0].repeat(arr[1]);
    } else {
        return undefined;
    }   
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
runTest(5);
runTest(6);

