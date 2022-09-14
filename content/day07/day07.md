# **Day 7 - 13.09.2022**
Today we tried to work with Pixels. 

## What do I try to do? 

I want to shuffle the pixel in a preloaded image. For that, each pixel have to be arranged in an Array. The struggle was real.

here I tried to shuffle the pixels of the following image and turn this...

![Hollow_knight](01/hollow-knight_6018152.png 'Hollow Knight')
---
 
...to this.
![Noise](01/download.png 'Hollow knight noise')

---
## What was the approach?
I put each pixel of the image in an array. The problem here was, that each pixel had 4 values for the RGB and the Alpha channels, which means, that every pixel took over 4 indexes. Here I had to tackle the problem on how to change the positions of the pixels, without changing the their respective colors. The array would something like this -> `{2,2,7,255,...}`

<p float="left">
  <img src="/content/day07/01/hollow-knight_6018152.png"></>
  <img src="/img2.png" width="100" /> 
  <img src="/img3.png" width="100" />
</p>

<iframe src="01/index.html" width="100%" height="500px"></iframe>