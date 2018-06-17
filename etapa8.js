var posX, posY;
var contagem = 0;
function setup() {
  createCanvas(640, 480);
  posX = 0;
  posY = 200;
}

function draw() {
  background(0);
  
  textSize(14); // define o tamanho da fonte
  fill(255); 
  text("Ja passaram " + contagem + " bolas.", 250, 15); // escreve na tela, note que podemos imprimir o valor de variáveis.
  
  if (posX < 640){
	posX = posX + 15;
  }else{
	contagem++;
	posX = 0;
  }
  ellipse(posX, posY, 50, 50);
}
