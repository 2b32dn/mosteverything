import p5 from 'p5';
import renderWave from './renderwave.js';


var xspacing = 16;    // Distance between each horizontal location
var w = 726;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx = (6.28 / period) * xspacing;;               // Value for incrementing x
var yvalues = new Array(Math.floor(w / xspacing));  // Using an array to store height values for the wave

function calcWave() {
    theta += 0.02;
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
        yvalues[i] = Math.sin(x) * amplitude;
        x += dx;
    }
}

const sketch = (p5) => { 
    setup(p5);
    p5.draw = () => {
        p5.background(0);
        calcWave();
        renderWave(p5, yvalues, xspacing);
    }
}

