var posX, posY;
var contagem = 0;
function setup() {
createCanvas(640, 580);
background(0);
posX = 0;
posY = 200;
}
function draw() {
background(100);
ellipse(30, 200, 120, 60);
stroke(50, 500, 505);
ellipse(400, 200, 50, 50);
strokeWeight(4);
ellipse(400, 200, 10, 10);
stroke(25, 150, 1000);
noFill();
ellipse(400, 200, 100, 100);
//line(400, 600, 400, 250);
stroke(350, 50, 455);
//stroke(200, 50, 455);
textSize(20);
fill (300);
text("Ja foram " + contagem + " tiros.", 250, 60);
if (posX < 400){
posX = posX + 50;
}else{
contagem++;
posX = 0;
}
ellipse(posX, posY, 10, 10);
}
