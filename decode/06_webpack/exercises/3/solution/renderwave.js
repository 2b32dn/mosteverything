
function renderWave(p5, yvalues, xspacing) {
    p5.noStroke();
    p5.fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
        p5.ellipse(x * xspacing, 200 + yvalues[x], 16, 16);
    }

}
export default renderWave;