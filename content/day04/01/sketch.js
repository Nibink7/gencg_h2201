let time = 0;
let wave = [];


/**
 * Code is derived from Coding train
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
  //frameRate(5)
}

function draw() {
  background(0);
  translate(520, windowHeight / 2);
  let x = 0;
  let y = 0;

  for (let i = 0; i < 1; i++) {
    let prevX = x;
    let prevY = y;

    let n = i * 2 + 1
    let radius = 150 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    ellipse(prevX, prevY, radius * 2)
    line(prevX, prevY, x, y)


  }
  wave.unshift(y);
  translate(250, 0)
  line(x - 250, y, 0, wave[0]);
  
  beginShape();
  for (let i = 0; i <= wave.length; i++) {
    vertex(i*0.5, wave[i]);
  }
  endShape();

  time += 0.1;

  if (wave.length > 15) {
    wave.pop;
  }

}
