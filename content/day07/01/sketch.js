let img;
let pixelArray = [];
let randomness = 0.9123432;


function preload() {
  img = loadImage("Images/hollow-knight_6018152.png");
  // img = loadImage("https://i.pinimg.com/564x/70/a1/b9/70a1b9d5264175d1ca825e0d9cb05b88.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  //noLoop();
}

function draw() {
  background(0);
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = (x + y * img.width) * 4;
        let pixel = {
          r: img.pixels[index + 0],
          g: img.pixels[index + 1],
          b: img.pixels[index + 2],
          a: img.pixels[index + 3],
        }
        pixelArray.push(pixel);
      }
    }
    
    
    pixelArray.sort(function(){return Math.random()- randomness})
    
    let newPixelArr = []
    pixelArray.forEach(element => {
      newPixelArr.push(element.r)
      newPixelArr.push(element.g)
      newPixelArr.push(element.b)
      newPixelArr.push(element.a)
    });
    
    for (let i = 0; i < newPixelArr.length; i++){
      img.pixels[i] = newPixelArr[i];
    }
    
    img.updatePixels();
    image(img, windowWidth / 2 - img.width / 2, windowHeight / 2 - img.height / 2)
    pixelArray = []
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
