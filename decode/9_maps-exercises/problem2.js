// Instructions: run this file like so:
// node problem2.js
//
// Make sure it doesn't throw an error

var assert = require('assert');
var price = { 123: 10 }

var both = {}

for (var k in description) {
    both[k] = { description: description[k], price: price[k] };
}

assert(both[123]["description"] == "a nice racket")
assert(both[456].description == "a luxurious purse")