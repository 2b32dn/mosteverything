// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...

function removeEvens(lst) {
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
    return lst % 2 !== 0;
    // return lst.filter( num => num % 2 !== 0)
}
console.log(lst.filter(removeEvens));

function keepLong(lst) {
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
    return lst.length >=5;
}
console.log(lst.filter(keepLong))

function greet(lst) {
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
function greet(lst){
	return "Hello " + lst;
}
console.log(lst.map(greet));
}

    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
lst.forEach(function greetLong(lst) {
	if(lst.length >= 4){
        arr.push("Hello " + lst)
	}
});
// return lst.filter(name => name.length >= 4).map(name => "Hello " + name)
console.log(arr);


function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
    if(lst.length >=5){
    	return true;
    } else{
    	return false;
    }
    // lst.every(element => element.length >= 5)
}
console.log(lst.every(allLong));
module.exports = {removeEvens, keepLong, greet, greetLong, allLong};
