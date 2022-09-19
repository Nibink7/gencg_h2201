

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

}


function draw() {
  background(50);

  Plotter();
}

function windowResized() {
  resizeCanvas(windowWidth, window.innerHeight);
}

function Plotter() {

  let space = 45;

  stroke(255);
  strokeWeight(1);
  arrayX = [];
  arrayY = [];
  for (i = 0; i <= windowWidth / space; i++) {
    arrayX.push(i * space);
    arrayY.push(random(150, 350));
  }

  for (i = 0; i < arrayY.length - 1; i++) {
    let t;
    let steps = 100;
    for (j = 0; j < steps; j++) {
      t = 1 / steps * j;
      let x = arrayX[i] + t * space;
      let y = myLerp(t, arrayY[i], arrayY[i + 1])
      let cosY = myCosLerp(t, arrayY[i], arrayY[i + 1])
      let smoothY = mySmoothLerp(t, arrayY[i], arrayY[i + 1])
      let smootherY = mySmoothLerp(t, arrayY[i], arrayY[i + 1])
      noFill()
      beginShape(POINTS)
        vertex(x, y -70);
        vertex(x, cosY);
        vertex(x, smoothY + 70);
        vertex(x, smootherY + 140);
      endShape()
    }
  }
}

function myCosLerp(t, y0, y1) {
  return (0.5 * (1-cos(t*PI)))*(y1-y0) + y0;
}

function mySmoothLerp(t, y0, y1){
  //  y=3x2−2x3
  return (3*t**2-2*t**3)*(y1-y0) + y0;
}

function mySmootherLerp(t, y0, y1){
  //  y=6x5−15x4+10x3
  return (6*t**5-15*x**4+10*x**3)*(y1-y0) + y0;
}

function myLerp(t, y0, y1) {
  return y0 * (1 - t) + t * y1;
}