
function setup(p5) {
    p5.setup = () => {
        let canvas = p5.createCanvas(710, 400);
        canvas.parent('sketch');
        p5.frameRate(60);
    }
}
export default setup;