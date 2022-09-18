# **Day 6 - 12.09.2022**

The task of today was to create something with faces. I was inspired hereby from the artwork [weird faces]() and tried to do something similar.
![weird faces](https://digitalideation.github.io/gencg_h2201/notes/day06/images/weird_faces.jpg)

I tried to go with an approach, in which every aspect of the Face will a result of Perlin noise. I tried to go with morphing it to different faces.


**This is the first iteration** (Refresh to see the mouth again.)
```javascript
//Function that creates a shape, that is animated by noise.
function head(diameter) {
  beginShape();
  for (let i = 0; i < TWO_PI * 4; i += 0.01) {
    // here the offsets create the distortion 
    let offsetX = map(cos(i + phase), -1, 1, 0, 4);
    let offsetY = map(sin(i - phase), -1, 1, 0, 5);
    //the offsets are given to the radius
    let r = map(noise(offsetX, offsetY), 0, 1, diameter * 0.9, diameter * 1.2);
    //the value that the radius gives off is given to the x and y values of the vertices that are going to be created.
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  //the phase adds a random value, that is inbetween other values. 
  phase += random(0.0001,0.001)
  //this if statement is used to not make the phase go overboard.
  if (phase == 20 || phase == -20){
    phase = -phase
  }
}

```
<iframe src="02/index.html" width="100%" height="500px"></iframe>

---
**The second approach**

I modified it a little bit more with some additional variables, to make it more destinct.
```javascript
//These are here to make the several parts of the face move in a certain way.
let orbiterX = xPos*sin(phase*0.21);
let orbiterY = yPos*cos(phase*0.31);
```
<iframe src="01/index.html" width="100%" height="500px"></iframe>