var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
// var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');

document.getElementById('joke').innerHTML = getRandomJoke.body
// document.getElementById('animal').innerHTML = getRandomJokeWithTag.body
