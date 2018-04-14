class Dog{
    constructor(n, fdf, b, a){
        this.name = n;
        this.favouriteDogFood = fdf;
        this.breed = b;
        this.age = a;
    }

    makeDogAnimalSound(){
        if(this.breed === "labrador") {
            console.log("big woof");
        } else {
            console.log("small woof");
        }   
    }
}

class Cat{
    constructor(n, fcf, a){
        this.name = n;
        this.favouriteCatFood = fcf;
        this.age = a;
    }

    MakeCatAnimalSound(){
        if(this.age < 2) {
            console.log("meow");
        } else {
            console.log("MEOW");
        }
    }
}


class Person{
    constructor(n, pi, ii){
        this.name = n ;
        this.purinaInventory = pi;
        this.iamsInventory = ii;
    }

    FeedTheDog(dog){
        if(dog.favouriteDogFood === 'iams') {
            if(this.iamsInventory > 0) {
                this.iamsInventory = this.iamsInventory - 1;
                console.log(dog.name + " has been fed");
            } else {
                console.log("no more iams!");
            }
        } else {
            console.log(this.name + " only has iams. Sorry " + dog.name + "!")
        }
    }

    FeedTheCat(cat){
        if(cat.favouriteCatFood === 'purina') {
            if(this.purinaInventory > 0) {
                this.purinaInventory = this.purinaInventory - 1;
                console.log(cat.name + " has been fed");
            } else {
                console.log("no more purina!");
            }
        } else {
            console.log(this.name + " only has purina. Sorry " + cat.name + "!")
        }
    }
}

var fido = new Dog("fido", "iams", "labrador", 4);
var mittens = new Cat("mittens", "purina", 3);
var bob = new Person("bob", 2, 1);

mittens.MakeCatAnimalSound();
fido.makeDogAnimalSound();

bob.FeedTheCat(mittens);
bob.FeedTheDog(fido);
bob.FeedTheCat(mittens);
bob.FeedTheDog(fido);
bob.FeedTheCat(mittens);


// function makeDog(n, fcf, a) {
//     return {name: n, favouriteDogFood: fdf, breed: b, age: a};
// }

// function makeCat(n, fcf, a) {
//     return {name: n, favouriteCatFood: fcf, age: a};
// }

// function makePerson(n, pi, ii) {
//     return {name: n, purinaInventory: pi, iamsInventory: ii};
// }

// function dogAnimalSound(dog) {
//     if(dog.breed === "labrador") {
//         console.log("big woof");
//     } else {
//         console.log("small woof");
//     }   
// }

// function catAnimalSound(cat) {
//     if(cat.age < 2) {
//         console.log("meow");
//     } else {
//         console.log("MEOW");
//     }
// }

// function feedDog(person, dog) {
//     if(dog.favouriteDogFood === 'iams') {
//         if(person.iamsInventory > 0) {
//             person.iamsInventory = person.iamsInventory - 1;
//             console.log(dog.name + " has been fed");
//         } else {
//             console.log("no more iams!");
//         }
//     } else {
//         console.log(person.name + " only has iams. Sorry " + dog.name + "!")
//     }
// }

// function feedCat(person, cat) {
//     if(cat.favouriteCatFood === 'purina') {
//         if(person.purinaInventory > 0) {
//             person.purinaInventory = person.purinaInventory - 1;
//             console.log(cat.name + " has been fed");
//         } else {
//             console.log("no more purina!");
//         }
//     } else {
//         console.log(person.name + " only has purina. Sorry " + cat.name + "!")
//     }
// }
