var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hi dickson",
  "all your base are belong",
  "gg ez",
  "get rekt",
  "ez pz lemon squeezy"
]

let outputs = [
  "Hi Dickson",
  "All Your Base Are Belong",
  "Gg Ez",
  "Get Rekt",
  "Ez Pz Lemon Squeezy"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var splitStr = str.split(" ");
    var newStr = [];
    for(var i = 0; i<splitStr.length;i++){
        newStr.push(splitStr[i].toString().charAt(0).toUpperCase() + splitStr[i].slice(1));
    }
    return newStr.join(" ");
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