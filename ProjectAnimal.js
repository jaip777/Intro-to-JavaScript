var bodyX = 192;
var bodyY = bodyX+52;
var bodyW = bodyY/2;
var bodyH = bodyW/2;
var xPos = 142;
var yPos = 196;
var eyebig = bodyY/15; //eye gets wider
var eyetall = bodyW/20; //eye gets taller

draw = function() {
    background(207, 254, 255);
    fill(237, 95, 12);
    
    ellipse(bodyX, bodyY, bodyW, 108); // body?
    ellipse(bodyX+90, bodyY-11, bodyH, 62); // face?
    
    fill(24, 24, 24);
    eyebig = eyebig +1;
    eyetall = eyetall +1;
    ellipse(bodyX+100,bodyY-20,eyebig,eyetall);
    
    line(279,238,310,239);//mouth
    //spikes on back
    triangle(167,155,168,190,192,188);
    triangle(233,159,228,199,200,188);
    triangle(141,160,154,197,173,190);
    triangle(199,148,210,190,192,188);
};
