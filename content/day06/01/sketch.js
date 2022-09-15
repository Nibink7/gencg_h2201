let phase = 0;
let red = random(0,255)
let green = random(0,255)
let blue = random(0,255)

function setup() {
  createCanvas(windowWidth, windowHeight);
 //noFill()
  stroke(255)
}

function draw() {
  translate(width / 2, height / 2)
  background(0);
  head(300)
  push()
  stroke(255,0,0)
  eye(30, 102, 12)
  pop()
  push()
  stroke(100,60,200)
  eye(30, -102, 12)
  push()
  stroke(0)
  fill(0)
  mouth(70,30,100)
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function head(diameter) {
  beginShape();
  for (let i = 0; i < TWO_PI * 4; i += 0.01) {
    let offsetX = map(cos(i + phase), -1, 1, 0, 4);
    let offsetY = map(sin(i - phase), -1, 1, 0, 5);
    let r = map(noise(offsetX, offsetY), 0, 1, diameter * 0.7, diameter * 1.2);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += random(0.0001,0.001)
  if (phase == 20 || phase == -20){
    phase = -phase
  }
}

function eye(diameter, xPos, yPos) {
  beginShape();
  translate(xPos, yPos)
  for (let i = 0; i < TWO_PI * 4; i += 0.01) {
    let offsetX = map(cos(i - phase), -1, 1, 0, 4);
    let offsetY = map(sin(i + phase), -1, 1, 0, 5);
    let r = map(noise(offsetX, offsetY), 0, 1, diameter * 0.7, diameter * 1.2);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
    let r2 = map(noise(offsetX, offsetY), 0, 1, diameter * 0.2, diameter * 0.5);
    let x2 = r2 * cos(i);
    let y2 = r2 * sin(i);
    vertex(x2, y2);
  }
  endShape(CLOSE);
  phase += 0.01
}

function nose(ridgehight, Holes) {
  circle(holes)
}

function mouth(diameter, xPos, yPos) {
  let orbiterX = xPos*sin(phase*0.51);//random(xPos, xPos+2);
  let orbiterY = yPos*cos(phase*0.31);//random(yPos, yPos+2);
  translate(orbiterX, orbiterY);
  beginShape();
  for (let i = 0; i < TWO_PI * 4; i += 0.1) {
    let offsetX = map(cos(i + phase), -1, 1, -10, 4);
    let offsetY = map(sin(i - phase), -1, 1, -9, 1);
    let r = map(noise(offsetX, offsetY), 0, 1, diameter * 0.7, diameter * 1.2);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.0001
}