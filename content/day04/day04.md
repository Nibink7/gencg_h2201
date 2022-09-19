# **Day 4 - 08.09.2022**

Todays topic was to make an machine, that draws a picture. I tried to make a **Fourier series**, which combines several wavefunctions into one.

With the help of the [Coding Train](https://www.youtube.com/watch?v=Mm2eYfj0SgA&t=1421s) I made an standard Fourier Series.

```javascript
//The series of frequencies, that would sum up to a combination of frequencies, will be made with a for-loop.
for (let i = 0; i < 17; i++) {
    let prevX = x;
    let prevY = y;

    let n = i * 2 + 1 // The amount of frequencies.
    let radius = size * (4 / (n * PI)); // The radii of the frequencies

    //This is the speed, that frequencies will move on the x and y direction.
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    ellipse(prevX, prevY, radius * 2)
    line(prevX, prevY, x, y)
}
```

<iframe src="02/index.html" width="100%" height="500px"></iframe>

---

Then I Made some modifications, that made the waves go in different directions.

```javascript
// These statements decide, which direction each circle should go
    if(i%2==0){
      x += radius * cos(n * time*cos(radius));
      y += radius * sin(n * time*cos(radius));
    }else{
      x += radius * sin(n * time*sin(radius));
      y += radius * cos(n * time*sin(radius));
    }
```

<iframe src="03/index.html" width="100%" height="500px"></iframe>

---

And added some different sizes with some additional `for`-loops.

<iframe src="01/index.html" width="150%" height="500px"></iframe>

**Here are several sources for further explaination about the Fourier Series and Fourier transformation.**
- [Coding Train](https://www.youtube.com/watch?v=Mm2eYfj0SgA)
- [Better Explained](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
