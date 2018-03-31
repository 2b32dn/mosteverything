import concatString from './a.js'
import { capitalizeString } from './b.js'

if(concatString("aa","bb") !== "aabb") throw new Error("You didn't implement the function properly")
if(capitalizeString("aAbB") !== "AABB") throw new Error("You didn't implement the function properly")

var t = document.createTextNode("You completed the task successfully!");
document.body.appendChild(t);