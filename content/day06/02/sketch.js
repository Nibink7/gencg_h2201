let phase = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
  stroke(255)
}

function draw() {
  translate(width / 2, height / 2)
  background(0);
  head(300)
  eye(30, 102, 12)
  eye(30, -102, 12)
  mouth(70,30,100)
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
  phase += 0.0001
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
  let orbiterX = xPos*phase*1;//random(xPos, xPos+2);
  let orbiterY = yPos*phase*1;//random(yPos, yPos+2);
  translate(orbiterX, orbiterY);
  beginShape();
  for (let i = 0; i < TWO_PI * 4; i += 0.1) {
    let offsetX = map(cos(i + phase*3), -1, 1, -10, 4);
    let offsetY = map(sin(i - phase*3), -1, 1, 0, 6);
    let r = map(noise(offsetX, offsetY), 0, 1, diameter * 0.7, diameter * 1.2);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.0001
}