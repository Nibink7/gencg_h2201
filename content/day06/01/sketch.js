

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  stroke(0)
}

function draw() {
  background(220);
  faceGen(250)
}


function faceGen(headsize){
  head(headsize)
  eyes(400,300);
}

function head(diameter){
  circle(width/2,height/2,diameter)
}

function eyes(leftCorner,rightCorner){
  bezier(50,leftCorner,rightCorner,20, 12,32,55,11)
}

function nose(ridgehight, Holes){
  circle(holes)
}

function mouth(mouthsize){

}