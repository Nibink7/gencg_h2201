var imgCloud;
var imgSun;
var imgEarth;


function preload() {
  imgEarth = loadImage('./images/HMAJFQlA.png');
  imgCloud = loadImage('images/earth_clouds_8K_transparent.png');
  imgSun = loadImage('images/sun_texture.png');
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
  //ambientLight(20, 20, 10)
  directionalLight(255, 255, 0, 700, 0, 0);
  directionalLight(255, 0, 255, 700, 0, 0);
  directionalLight(255, 255, 0, 700, 0, 0);
  rotate(0.4101524);// tilt of the rotation axis
  rotateY(millis() / 36000);
  earth();
  pop();
  ambientLight(250, 250, 0);
  sun();
  orbitControl();
}

function earth() {
  push()
  //tint(120, 150, 150, 2000)
  texture(imgEarth);
  textureMode(IMAGE)
  sphere(100, 100, 100)
  pop()


  push()
  ambientLight(20, 20, 80)
  //tint(180, 153, 200)
  texture(imgCloud)
  sphere(101, 100, 100)
  rotateY(millis() / 3600)
  pop()
}

function sun() {
  translate(-3000, 0, 0)
  texture(imgSun)
  //emissiveMaterial(255,2,0)
  sphere(2400, 100, 100)
}
