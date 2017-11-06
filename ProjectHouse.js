background(219, 255, 255);

fill(34, 58, 199);//roof
triangle(200, 28, 350, 150, 50, 150);


fill(222, 84, 123);//windows
rect(60, 151, 280, 207);
for (var j = 8; j < 10; j++) {
    fill(255, 0, 0);
    for (var i = 2; i < 8; i++) {
        fill(255, 255, 255);
        rect(i*40, j*27, 35, 27);
    }
}

fill(120, 80, 19);//door
rect(180, 280, 40, 77);


for (var j = 8; j < 9; j++) {//bushes
    fill(255, 0, 0);
    for (var i = 0; i < 10; i++) {
        fill(15, 194, 93);
        ellipse(i*44, j*44, 64, 41);
    }
}
