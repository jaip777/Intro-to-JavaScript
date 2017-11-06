var xPositions = [200,273, 340,129, 70];
var yPositions = [0,0,0,0,0];
var aColor = [0];
var bColor=[0];
var cColor = [0];

draw = function() {
    background(247, 255, 253);
       if (mouseIsPressed) {
        xPositions.push(mouseX);
         }

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(cColor, aColor, bColor);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
         if (mouseIsPressed) {
          yPositions.push(0);
         }
        if(yPositions[i]>401){
            yPositions[i] = 0;
            cColor = [random(30,400)];
            bColor = [random(30,400)];
            aColor = [random(30,400)];
        }
    }

  
    
};
