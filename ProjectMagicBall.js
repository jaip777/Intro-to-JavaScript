fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(195, 80, 305, 282, 96, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer === 4) {
    text("You Guessed", 166, 200);
    text("Number 4 - Correct!", 151, 229); 
} else if (answer === 1) {
    text("You Guessed", 166, 200);
    text("Number 1 - Incorrect!", 151, 229); 
}
 else if (answer === 2) {
    text("You Guessed", 166, 200);
    text("Number 2 - Incorrect!", 151, 229); 
 } else if (answer === 3) {
    text("You Guessed", 166, 200);
    text("Number 3 - Incorrect!", 151, 229);
 }
    if (answer === 5) {
    text("You Guessed", 166, 200);
    text("Number 5 - Incorrect!", 151, 229); 
}
