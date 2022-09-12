[Overview](../../readme.md)
# **Day 1 - 05.09.2022**
Today we got introduced to Generative Computer Graphics.
We also got a new insight of Github and learned how to fork a repository.  

## Computing without a Computer
Together we recreated "the Beach" by [Moniker Studio](https://conditionaldesign.org/workshops/the-beach/). We were Three people and each of us had a pen with a different color. All we had to do, was to put a dot on the paper and make sure, that the spacing between each dot is as even as possible.

  
## Computing with a Computer
I tried to reacreate the [Sol Lewitt Wall Drawing](https://jessicacarnegie.com/sol-lewitt-wall-drawing-118). The drawing contains multiple, randomly placed dots, which are all connectet by straight lines.

```javascript
function fillArrayWithCoordinates(number){
    for(let i = 0; i < number; i++){
        // first the X and Y coordinates are random values between 0 and the width or hight of the canvas.   
        multiPosX.push(Math.random() * width);
        multiPosY.push(Math.random() * height);
        // same goes for the Velocity, the points are going to move.
        veloCityX.push(Math.random());
        veloCityY.push(Math.random());
  }
}

/**
 * @function makePointsAndConnect generates points based on the arrays in the @function fillArrayWithCoordinates.
 * @param {*} number determines the number of the points displayed on the screen.
 */
function makePointsAndConnect(number) {
  for (let i = 0; i < number; i++) {
    posX = moveX
    posY = moveY
    point(posX, posY)

    //This for-loop connects all the points with straight lines.
    for (let j = 0; j < number; j++) {
      line(multiPosX[j], multiPosY[j], multiPosX[i], multiPosY[i])
    }

    multiPosX[i] = multiPosX[i] + veloCityX[i];//determines the velocity of the Point in the X-axis.
    multiPosY[i] = multiPosY[i] + veloCityY[i];//determines the velocity of the Point in the Y-axis.

    //changes the direction, the Point moves, when it collides.
    if (multiPosX[i] >= width || multiPosX[i] <= 0) {
      veloCityX[i] = -veloCityX[i];
    }
    if (multiPosY[i] >= height || multiPosY[i] <= 0) {
      veloCityY[i] = -veloCityY[i];
    }
  }
}
```

{% raw %}
<iframe src="01/index.html" width="100%" height="500px"></iframe>
{% endraw %}


