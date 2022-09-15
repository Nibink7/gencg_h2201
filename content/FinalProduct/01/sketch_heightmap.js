// Code is provided by Kumu-Paul

let heightmap;
let terrain;
let earth;

function preload(){
  heightmap = loadImage('images/topography_5k.png');
  earth = loadImage('images/HMAJFQlA.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  //camera(0, 0, 0);
  terrain = meshFromHeightmap(heightmap);
  textureWrap(MIRROR)
}

function draw() {
  background(0);
  
  orbitControl();
  
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  
  translate(-windowWidth/4, windowHeight/4)

  rotateX(PI / 2);
  scale(1, 1, 30 / 255);
  //textureMode(IMAGE);
  texture(earth);
  // plane(200,200)
  model(terrain);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function meshFromHeightmap(image, detailX = 800, detailY = 400) {
  return new p5.Geometry(
    detailX,
    detailY,
    function() {
      // Pixels per sample
      const xpps = (image.width - 1) / detailX;
      const ypps = (image.height - 1) / detailY;
      const xoff = -256;
      const yoff = -256;
      const unitX = 1024 / detailX;
      const unitY = 512 / detailY;
      
      let values = [];
      for (let j = 0; j <= detailY; j++) {
        for (let i = 0; i <= detailX; i++) {
          let v = gray(image.get(round(i * xpps), round(j * ypps)));
          this.vertices.push(new p5.Vector(
            xoff + i * unitX,
            yoff + j * unitY,
            v
          ));
          values.push(v);
        }
      }
      
      this.computeFaces();
      this.computeNormals();
      
      this.gid = `terrain|${cyrb53(values)}`;
    }
  )
}


// // The built in p5.js RGB -> lightness function leaves something to be desired.
// // Credit: https://stackoverflow.com/a/13558570/229247

// sRGB luminance(Y) values
const rY = 0.212655;
const gY = 0.715158;
const bY = 0.072187;

// Inverse of sRGB "gamma" function. (approx 2.2)
function inv_gam_sRGB(ic) {
    const c = ic/255.0;
    if ( c <= 0.04045 ) {
        return c/12.92;
    } else { 
        return pow(((c+0.055)/(1.055)),2.4);
    }
}

// sRGB "gamma" function (approx 2.2)
function gam_sRGB(v) {
    if(v<=0.0031308) {
      v *= 12.92;
    } else {
      v = 1.055*pow(v,1.0/2.4)-0.055;
    }
    return int(v*255+0.5);
}

// GRAY VALUE ("brightness")
function gray(c) {
    return gam_sRGB(
            rY*inv_gam_sRGB(red(c)) +
            gY*inv_gam_sRGB(green(c)) +
            bY*inv_gam_sRGB(blue(c))
    );
}

// // Generate a hash code from an array of integers
const cyrb53 = function (ary) {
  let h1 = 0xdeadbeef,
    h2 = 0x41c6ce57;
  for (let i = 0, v; i < ary.length; i++) {
    v = ary[i];
    h1 = Math.imul(h1 ^ v, 2654435761);
    h2 = Math.imul(h2 ^ v, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
