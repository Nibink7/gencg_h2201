# **Day 7 - 13.09.2022**
Today we tried to work with Pixels. 

## What do I try to do? 

I want to shuffle the pixel in a preloaded image. For that, each pixel have to be arranged in an Array. The struggle was real.

here I tried to shuffle the pixels of the following image and turn this...

![Hollow_knight](01/Images/hollow-knight_6018152.png 'Hollow Knight')
---
 
...to this.
![Noise](01/Images/download.png 'Hollow knight noise')

---
## What was the approach?
I put each pixel of the image in an array. The problem here was, that each pixel had 4 values for the RGB and the Alpha channels, which means, that every pixel used the space of 4 indexes. Here I had to tackle the problem on how to change the positions of the pixels, without changing the their respective colors. The array would something like this -> `{2,2,7,255,...}`

```javascript
// here the Array is filled with various Pixel Values of the given Image.
for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = (x + y * img.width) * 4;
        //The pixel variable stores RGBA values as one object and is pushed onto the array.
        let pixel = {
          r: img.pixels[index + 0],
          g: img.pixels[index + 1],
          b: img.pixels[index + 2],
          a: img.pixels[index + 3],
        }
        pixelArray.push(pixel);
      }
    }
// After that, array is sorted randomly.
pixelArray.sort(function(){return Math.random() - 0.5})

//Create a new Array and push the new values
let newPixelArr = []
pixelArray.forEach(element => {
    newPixelArr.push(element.r)
    newPixelArr.push(element.g)
    newPixelArr.push(element.b)
    newPixelArr.push(element.a)
});

//Set each Pixel into their new position based on the newly created array.
for (let i = 0; i < newPixelArr.length; i++){
    img.pixels[i] = newPixelArr[i];
}

// At last let the Pixel update and draw the new Image.
img.updatePixels();
image(img, windowWidth / 2 - img.width / 2, windowHeight / 2 - img.height / 2)

// When there is a loop, make the Array empty, so it is less taxing for the memory.
pixelArray = []

```
<iframe src="01/index.html" width="100%" height="500px"></iframe>