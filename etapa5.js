var vidas = 10; 
var pontos = 0; 
var nivel = 3

function setup() {
  createCanvas(490,510);

}

function draw() {
  background(200); 
  textSize(15);
  fill(5,0,0);
  text("Vidas: "+vidas, 5, 60);
  text("Pontos: "+pontos, 5, 80);
  text("Nivel: "+nivel, 5, 100);
}
