let rows =[]
let columns =[]
let distance = 30
let distortion = 5
let space = 25
let steps = 30

function setup() {
  createCanvas(500, 500);
  stroke(0)
  strokeWeight(0.5)
  noLoop()
}

function draw() {
  background(220);
  //plotterX(10)
  //plotterY(10)
  sketchGrid()
  //grid();
}

function grid(){
  for(i = 0; i<= 200  ; i++){
    line(i*distance, 0, i*distance, height)
    line(0, i*distance, height, i*distance)
  }
}

function sketchGrid(){
  for (let i = 0; i < width; i++) {
    plotterX(i*4)
    plotterY(i*4)
  }
}

function plotterX(distance) {

  arrayX = [];
  arrayY = [];
  for (i = 0; i <= width / space; i++) {
    arrayX.push(i * space);
    arrayY.push(random(distance, distance + distortion));
  }

  for (let i = 0; i < arrayY.length - 1; i++) {
    let t;

    for (j = 0; j < steps; j++) {
      t = 1 / steps * j;
      let x = arrayX[i] + t * space;
      let cosY = myCosLerp(t, arrayY[i], arrayY[i + 1])
      point(x, cosY);
    }
  }
}

function plotterY(distance) {

  arrayX = [];
  arrayY = [];
  for (i = 0; i <= width / space; i++) {
    arrayY.push(i * space);
    arrayX.push(random(distance, distance + distortion));
  }

  for (let i = 0; i < arrayY.length - 1; i++) {
    let t;
    for (j = 0; j < steps; j++) {
      t = 1 / steps * j;
      let y = arrayY[i] + t * space;
      let cosX = myCosLerp(t, arrayX[i], arrayX[i + 1])
      point(cosX, y);

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

