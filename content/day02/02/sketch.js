

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

}


function draw() {
  background(50);

  Plotter();
}


function Plotter() {

  let space = 25;

  stroke(255);
  strokeWeight(1);
  arrayX = [];
  arrayY = [];
  for (i = 0; i <= width / space; i++) {
    arrayX.push(i * space);
    arrayY.push(random(150, 350));
  }
  console.log(arrayX);
  console.log(arrayY)

  for (i = 0; i < arrayY.length - 1; i++) {
    let t;
    let steps = 80;
    for (j = 0; j < steps; j++) {
      t = 1 / steps * j;
      let x = arrayX[i] + t * space;
      let y = myLerp(t, arrayY[i], arrayY[i + 1])
      let cosY = myCosLerp(t, arrayY[i], arrayY[i + 1])
      let smoothY = mySmoothLerp(t, arrayY[i], arrayY[i + 1])
      let smootherY = mySmoothLerp(t, arrayY[i], arrayY[i + 1])
      point(x, y);
      point(x, cosY + 70);
      point(x, smoothY + 140);
      point(x, smootherY + 210);
      console.log(x, y)
    }
    // line(x, myLerp(x, arrayY[i],arrayY[i]), x1, myLerp(x1, arrayY[i+1],arrayY[i+1]));
    // line(x, myCosLerp(arrayY[x], arrayY[i]), x1, myCosLerp(arrayY[x+1], arrayY[i+1]));
    // point(x, myCosLerp(arrayY[i], arrayY[i+1]));
    // point(arrayX[i]*0.1, myLerp(i * 0.01, arrayY[i],arrayY[i]))
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