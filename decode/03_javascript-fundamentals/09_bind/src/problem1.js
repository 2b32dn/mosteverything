var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}

// bind greet to bob

// var x = greet.bind(bob);
// console.log(x())


module.exports = greet;