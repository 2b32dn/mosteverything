var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function rand(n) {
    return Math.floor(random() * n)
}

var words = ["Abibliophobia", "Absquatulate", "Allegator", "Anencephalous", "Argle", "Batrachomyomachy", "Billingsgate", "Bloviate", "Blunderbuss", "Borborygm", "Boustrophedon", "Bowyang", "Brouhaha", "Bumbershoot", "Callipygian", "Canoodle", "Cantankerous", "Catercornered", "Cockalorum", "Cockamamie", "Codswallop", "Collop", "Collywobbles", "Comeuppance", "Crapulence", "Crudivore", "Discombobulate", "Donnybrook", "Doozy", "Dudgeon", "Ecdysiast", "Eructation", "Fard", "Fartlek", "Fatuous"]



function randomWord() {
    return words[rand(words.length)];
}

function generateRandomPaths(n) {
    var ret = [];
    var seen = {}
    var r = Math.floor(random() * words.length);
    while (ret.length < n) {
        var r = randomWord()
        if (!(r in seen)) {
            seen[r] = true;
            ret.push(r);
        }
    }
    return ret;
}

function makeRando(path) {
    let verb;
    let expectedBody;
    switch (Math.floor(random() * 3)) {
        case 0: verb = "GET"; break;
        case 1: verb = "POST"; break;
        case 2: verb = "PUT"; break;
    }
    if (verb == "POST" || verb == "PUT") {
        expectedBody = randomWord();
    }
    return { path, verb, expectedBody };
}

let randos = generateRandomPaths(8).map(makeRando);


const FINISHED = "finished"
function makeDescription(input, output) {
    return { input, output }
}

let descriptions = [];

for (let i = 0; i < randos.length; i++) {
    let output;
    let input;
    if (i == randos.length - 1) {
        output = FINISHED;
    } else {
        output = randos[i + 1];

    }
    if (i == 0) {
        input = { verb: "GET", path: '' };
    } else {
        input = randos[i];

    }

    top = { input, output }
    descriptions.push(top);
}

const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))


function addFinal(inp) {
    let f;
    switch (inp.verb) {
        case 'GET': f = app.get.bind(app); method="GET"; break;
        case 'POST': f = app.post.bind(app); method="POST"; break;
        case 'PUT': f = app.put.bind(app); method="PUT"; break;
        default: throw new Error("WHAT");
    }
    f('/' + inp.path, (req, res) => res.send("Here is the treasure: goo.gl/SsAhv"))
}

function stringOfDesc(desc) {
    if (desc.expectedBody) {
        return "Make a " + desc.verb + " request at the path /" + desc.path + " with the following body: " + desc.expectedBody;
    }
    return "Make a " + desc.verb + " request at the path /" + desc.path;
}
let globalTimer;

function addPath(desc) {
    if (desc.output == FINISHED) {
        addFinal(desc.input);
        return;
    }
    let inputPath = desc.input.path;
    let outputPath = desc.output.path;
    
    let f;
    switch (desc.input.verb) {
        case 'GET': f = app.get.bind(app); break;
        case 'POST': f = app.post.bind(app); break;
        case 'PUT': f = app.put.bind(app); break;
        default: throw new Error("WHAT");
    }
    f('/' + inputPath, (req, res) => {
        
        if (inputPath !== '') {
            if (globalTimer === undefined) {
                res.send("Start from the start buddy");
                return
            }
            if (new Date() / 1 > globalTimer + 1000) {
                res.send("Too slow!")
                return;
            }

        }
        if (inputPath === '') globalTimer = new Date() / 1
        if (desc.input.expectedBody && req.body.toString() != desc.input.expectedBody) {
            res.send("invalid body");
            return;
        } else {
            res.send(stringOfDesc(desc.output))
            return;
        }
        res.send("WHAT");
    })
}

descriptions.forEach(desc => {
    addPath(desc);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
