// Fix all the errors in this program
var dog = {breed: "schnitzel"};
function greet() {
    return "I'm a " + this.breed;
}

greet.bind(breed);

// var x = greet.bind(dog);
// console.log(x())

module.exports = greet;