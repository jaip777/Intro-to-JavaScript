var xPos = 100;//first star
var yPos = 50;
var xPos2 = 450;//second star
var yPos2= 75;

draw = function() {
    background(29, 40, 115);//background blue
    fill(255, 242, 0);
    //little stars
    ellipse(10,10,10,10);
    ellipse(15,73,10,10);
    ellipse(124,134,10,10);
    ellipse(77,38,10,10);
    ellipse(37,182,10,10);
    ellipse(337,70,10,10);
    ellipse(236,153,10,10);
    ellipse(144,51,10,10);
    ellipse(226,22,10,10);
    ellipse(206,80,10,10);
    ellipse(360,10,10,10);
    ellipse(323,197,10,10);
    fill(166, 0, 255);
    ellipse(xPos,yPos, 30, 30);//star 1 shadow 
    fill(221, 255, 0);
    ellipse(xPos, yPos, 20, 20);//star 1
    fill(230, 0, 255);
    ellipse(xPos2,yPos2, 30, 30);//star 1 shadow 
    fill(221, 255, 0);
    ellipse(xPos2, yPos2, 20, 20);//star 2
    xPos2=xPos2-2;
    yPos2=yPos2+1;
    yPos=yPos+1;
    xPos=xPos+1;
    fill (77, 255, 0);//ground
    ellipse(199,359,599,118);
};

