let posX;
let posY;
let moveX;
let moveY;
let amountOfPoints = 100;
let multiPosX = [];
let multiPosY = [];
let veloCityX = [];
let veloCityY = [];

function setup() {
  createCanvas(windowWidth, windowWidth);
  stroke(0,0,0)
  strokeWeight(0.1)
  //noLoop()
  fillArrayWithCoordinates(amountOfPoints)
  //console.log(multiPosX)
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240)
  makePointsAndConnect(amountOfPoints)
}

/**
 * @function fillArrayWithCoordinates assigns the X and Y coordinates in their respective position in their array.
 * @param {*} number 
 */
function fillArrayWithCoordinates(number){
  for(let i = 0; i < number; i++){
   multiPosX.push(Math.random() * width);
   multiPosY.push(Math.random() * height);
   veloCityX.push(Math.random());
   veloCityY.push(Math.random());
  }
}

/**
 * @function makePointsAndConnect generates points based on the arrays in the @function fillArrayWithCoordinates.
 * @param {*} number determines the number of the points displayed on the screen.
 */
function makePointsAndConnect(number){
  for(let i = 0; i < number; i++){
    posX = moveX
    posY = moveY
    point(posX,posY)


    for(let j = 0; j< number; j++){
      line(multiPosX[j], multiPosY[j], multiPosX[i], multiPosY[i])
    }
    multiPosX[i] = multiPosX[i] + veloCityX[i];
    multiPosY[i] = multiPosY[i] + veloCityY[i];

    if(multiPosX[i] >= width || multiPosX[i] <= 0){
      veloCityX[i] = -veloCityX[i];
    }
    if(multiPosY[i] >= height || multiPosY[i] <= 0){
      veloCityY[i] = -veloCityY[i];
    }
  }
}

