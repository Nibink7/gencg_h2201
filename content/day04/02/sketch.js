let time = 0;
let wave = [];
let size = 75;

/**
 * Code is derived from Coding train
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
  //frameRate(5)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(size + 200, windowHeight / 2);
  let x = 0;
  let y = 0;

  for (let i = 0; i < 17; i++) {
    let prevX = x;
    let prevY = y;

    let n = i * 2 + 1
    let radius = size * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    ellipse(prevX, prevY, radius * 2)
    line(prevX, prevY, x, y)
  }

  //ave.unshift(x);
  wave.unshift(y);
  translate(size + 100, 0)
  line(x -(size + 100), y, 0, wave[0]);
  
  beginShape();
  for (let i = 0; i <= wave.length; i++) {
    vertex(i*0.5, wave[i]);
  }
  endShape();

  time += 0.01;

  if (wave.length > 15) {
    wave.pop;
  }

}
