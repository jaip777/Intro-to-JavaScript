background(89, 216, 255);
background(89, 216, 255);


var bodyLength = 137;
var bodyHeight = 84;
var bodyColor = color(0, 255, 55);
var drawFish = function() {
var centerX = random(50, 400);
var centerY = random(50, 400);
    fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/3;
var tailHeight = bodyHeight/-2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/1-tailWidth, centerY-tailHeight,
         centerX-bodyLength/4-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
drawFish();
drawFish();
drawFish();
drawFish();
