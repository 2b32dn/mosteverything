class Teacher{
    constructor(n){
        this.name = n;
        this.hoursTaught = 0
    }
    dadJoke(){
        console.log(this.name + " made a funny dad joke.");
    }

    teach(){
        this.fundamentalsProficiency = this.fundamentalsProficiency + 1;
        this.hoursTaught = this.hoursTaught + 1;
    }
}

class Student{
    constructor(n, we){
        this.name = n;
        this.fundamentalsProficiency = 0;
        this.workEthic = we;
    }

    getProficiency() {
        return this.fundamentalsProficiency;
    }

    doProject(){
        if(this.fundamentalsProficiency < 5) {
            console.log(this.name + " was not ready to take on the project");
        } else {
            console.log(this.name + " successfully completed the project!");
        }    
    }

    study(){
        this.fundamentalsProficiency = this.fundamentalsProficiency + this.workEthic;
    }
}

/////////////////////

// function makeTeacher(n) {
//     return {name: n, hoursTaught: 0};
// }

// function makeStudent(n, we) {
//     return {name: n, fundamentalsProficiency: 0, workEthic: we};
// }

// function teach(teacher, student) {
//     student.fundamentalsProficiency = student.fundamentalsProficiency + 1;
//     teacher.hoursTaught = teacher.hoursTaught + 1;
// }

// function getProficiency(student) {
//     return student.fundamentalsProficiency;
// }

// function dadJoke(teacher) {
//     console.log(teacher + " made a funny dad joke.");
// }

// function doProject(student) {
//     if(student.fundamentalsProficiency < 5) {
//         console.log(student.name + " was not ready to take on the project");
//     } else {
//         console.log(student.name + " successfully completed the project!");
//     }
// }

// function study(student) {
//     student.fundamentalsProficiency = student.fundamentalsProficiency + student.workEthic;
// }

var jack = new Teacher("jack");
var bob = new Student("bob", 10);
var susan = new Student("susan", 12);

// teach(jack, bob);
// teach(jack, susan);
jack.teach(bob);
jack.teach(susan);

// doProject(bob);
// doProject(susan);
bob.doProject();
susan.doProject();

// study(bob);
// study(susan);
bob.study();
susan.study();

// doProject(bob);
// doProject(susan);
bob.doProject();
susan.doProject();


