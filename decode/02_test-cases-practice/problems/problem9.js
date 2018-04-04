var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hi hello thank you good bye",
  "The cake is a lie",
  "Ez Pz Lemon Squeezy",
  "alpha beta charlie delta echo foxtrot juliet india",
  ""
]

let outputs = [
  "good",
  "cake",
  "Squeezy",
  "foxtrot",
  ""
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var newSentence = str.split(" ");

    console.log(newSentence);
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

