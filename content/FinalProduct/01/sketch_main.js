var img3;
var img2;
var img1;
var img4;

function preload() {

  img1 = loadImage('images/HMAJFQlA.png');
  img3 = loadImage('images/earth_clouds_8K_transparent.png');
  img2 = loadImage('images/sun_texture.png');
  img4 = loadImage('images/topography_5k.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //colorMode(HSB, 360,100,100,100)
  noStroke()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  background(0, 0, 10);
  push()
  // ambientLight(20, 20, 10)

  rotate(0.4101524);// tilt of the rotation axis
  rotateY(2+millis() / 3600);
  earth();
  pop();
  // ambientLight(250, 250, 0);
  // sun();
  orbitControl();
}

function earth() {
  directionalLight(255, 255, 0, 700, 0, 0);
  directionalLight(255, 255, 255, 700, 0, 0);
  directionalLight(255, 0, 255, 700, 0, 0);
  directionalLight(255, 255, 0, 700, 0, 0);
  push()
  //tint(120, 150, 150, 2000)
  texture(img1);
  sphere(200, 150, 150)
  pop()
  push()
  ambientLight(0, 0, 0)
  //tint(180, 153, 200)
  texture(img3)
  sphere(201, 100, 100)
  pop()
  push()
  noFill()
  tint(2,200,200,50)
  sphere(201, 150, 150)
  pop()
}

function sun() {
  translate(-7000, 0, 0)
  texture(img2)
  //emissiveMaterial(255,2,0)
  sphere(3400, 100, 100)
}
