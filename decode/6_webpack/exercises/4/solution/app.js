var oneLinerJoke = require('one-liner-joke');
var joke = oneLinerJoke.getRandomJokeWithTag('animal').body;
var t = document.createTextNode(joke);
document.getElementById("root").appendChild(t);