function makeTeacher(n) {
    return {name: n, hoursTaught: 0};
}

function makeStudent(n, we) {
    return {name: n, fundamentalsProficiency: 0, workEthic: we};
}

function teach(teacher, student) {
    student.fundamentalsProficiency = student.fundamentalsProficiency + 1;
    teacher.hoursTaught = teacher.hoursTaught + 1;
}

function getProficiency(student) {
    return student.fundamentalsProficiency;
}

function dadJoke(teacher) {
    console.log(teacher + " made a funny");
}

function doProject(student) {
    if(student.fundamentalsProficiency < 5) {
        console.log(student.name + " was not ready to take on the project");
    } else {
        console.log(student.name + " successfully completed the project!");
    }
}

function study(student) {
    student.fundamentalsProficiency = student.fundamentalsProficiency + student.workEthic;
}

var jack = makeTeacher("jack");
var bob = makeStudent("bob", 10);
var susan = makeStudent("susan", 12);
teach(jack, bob);
teach(jack, susan);
doProject(bob);
doProject(susan);
study(bob);
study(susan);
doProject(bob);
doProject(susan);


