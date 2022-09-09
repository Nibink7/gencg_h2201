## **Day 1 - 05.09.2022**

 Today we got introduced to Generative Computer Graphics.

  

### Computing without a Computer

Together we recreated "the Beach" by [Moniker Studio](https://conditionaldesign.org/workshops/the-beach/). We were Three people and each of us had a pen with a different color. All we had to do, was to put a dot on the paper and make sure, that the spacing between each dot is as even as possible.

  

### Computing with a Computer

I tried to reacreate the [Sol Lewitt Wall Drawing](https://jessicacarnegie.com/sol-lewitt-wall-drawing-118). The drawing contains multiple, randomly placed dots, which are all connectet by straight lines.  

  

---

## **Day 2 - 05.09.2022**

Today we tried make a computergraphics based on grids and patterns. I tried to make a grid with imperfect lines. The intention here was to make it look like as it was handmade. I achieved the grid with [Linear Interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).

---

## **Day 3 - 06.09.2022**

Today we had the task to do an unique clock, that should involve some kind of cycle. My idea was to make a globe rotate periodically, in which the time could be told based on it's rotational angle. The Idea was inspired by [**Blender Guru**](https://www.youtube.com/watch?v=0YZzHn0iz8U)

To make the globe more earthlike, I applied a [texture](https://www.dropbox.com/sh/1rxblwi19i78ieh/AADNsHNRA7SysJ015GkXplewa?dl=0), which was provided by NASA. At first I applied the earth texture on a sphere and after that I tried to make it reflect light, by letting it emit it from another sphere, that should represent the sun. to make it more realistic, I applied a cloud texture ontop the earth texture. Applying the texture on a 3D modell is surprisingly easy in P5.js. it goes like this:

```javascript
let img1;

function preload() {
    img1 = loadImage('image.png'); //first you preload the image.
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
}


function draw() {
	backround(255);
	texture(img1); // Here you call the preloaded image as a texture BEFORE the mesh is created.
    sphere(100, 100, 100)
}

```

I tried to make a Sun, that emits light by adding an emissive material, that reflects on the spinning globe, but I had to do some workarounds. 

---

## **Day 4 - 07.09.2022**

Todays topic was to make an machine, that draws a picture. I tried to make a **Fourier series**, which combines several wavefunctions into one. 

<iframe src="content/day04/01/index.html" width="100%" height="300"></iframe>

**Several sources for further explaination**
- [Coding Train](https://www.youtube.com/watch?v=Mm2eYfj0SgA)
- [Better Explained](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)