function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
  //noFill();
}
let innerRad = 50; 
let outerRad = 150;
let a = 0.5*(outerRad - innerRad);
let c = 0.5*(outerRad + innerRad);
let point = 3;
let offset;

function draw() {
  background(100);
  

  dtorus()

  endShape(CLOSE);
  orbitControl(5);
}

function dtorus(){
  beginShape(TRIANGLE_STRIP)
  strokeWeight(0.5)
  for (let v= 0; v < 360; v += 10){

    for(let u = 0; u < 360; u += 10){
      // let x = (c + a * cos(v)) * cos(u);
      // let y = (c + a * cos(v)) * sin(u);
      // let z = a*sin(v);
      if (u % (point * 2) == 0){
        var x = (c + a * cos(v)) * sin(u+offset);
        var y = (c + a * cos(v)) * cos(u+offset);
        var z = a*sin(v);
      } else {
        var x = (c + a * cos(v-point)) * sin(u + offset);
        var y = (c + a * cos(v-point)) * cos(u + offset);
        var z = a*sin(v);
      }
      
      vertex(x,y,z)
    }
    if(offset == 0){
      offset = point;
    } else {
      offset = 0;
    }

  }

  endShape(CLOSE);
}