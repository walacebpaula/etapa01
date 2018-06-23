var nd;  
var ud;   
var disparo = []; 
var xd = [], yd = []; 
var xj, yj; 
var cor;
var vx = []; 
var vy = [];
var vdx = [] 
var vdy = []
var vtam = []; 
var qt; 
var vcorR = []; 
var vcorG = [];
var vcorB = [];
var vativo = [];
var tamArea; 
var vspeed;
var raioD;  
var raioO;  
var raioJ;  
var vidas; 
var pontos; 
var nivel;
var tela;
  
function setup() 
{
	tamArea = 500; 
	tela = 1;
	nivel = 1;
    vidas = 10;
    pontos = 0; 	
	raioD = 8;  
	raioO = 30; 
	raioJ = 30; 
	createCanvas(tamArea,tamArea);	
	atualizaNivel();
}

function draw() 
{ 
	if (tela == 1) {
		showTelaInicializacao();		
	}
	if (tela == 2) {
		showTelaAndamento();
	}	
	if (tela == 3) {
		showGameOver();
	}	
	if (tela == 4) {	
		showTelaConclusao();
	}		
}

function showTelaInicializacao()
{
	push();
	background('yellow');
    fill('black');
	textSize(70)
	text("ASTERÓIDES",30,260);
	textSize(15)	
	text("Clique com o mouse na tela e aperte ALT para iniciar o jogo...",50,490);
	pop();
}

function showTelaAndamento()
{
	if (keyIsDown(UP_ARROW)) {
		yj -= 5;
	}

	if (keyIsDown(DOWN_ARROW)) {
		yj += 5;
	}
    
    if (keyIsDown(LEFT_ARROW)) {
        xj -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
    xj += 5;
    }
	
	for (i=0; i<qt; i++) {	
	
		for (j=0; j<nd; j++) {
			if (vativo[i] && disparo[j] && 
			    dist(vx[i],vy[i],xd[j],yd[j]) < vtam[i]+raioD ) {
				vativo[i] = false;
				pontos++;
			}
		}  
		
		if (vativo[i] && dist(vx[i],vy[i],xj,yj) < vtam[i]+raioJ ) {
			vativo[i] = false;
			vidas--;
		}
	}	
	
	for (i=0; i<nd; i++) {
	  if (disparo[i]) {
		xd[i] = xd[i]+5;
		
		if (xd[i] > tamArea) {
		  disparo[i] = false; 
		}
	  }
	}
  
    background(cor);
  	
	push();
	textSize(15);
	fill(255);
   	text("Vidas:   "+vidas, 420, 40);
	text("Pontos: "+pontos, 420, 60);
	text("Nível:    "+nivel, 420, 80);	
	pop();
	
	push();
	stroke(255);
	for (i=0; i<qt; i++) {
		if (vativo[i]) {
			fill(vcorR[i], vcorG[i], vcorB[i]);
			vx[i] = vx[i] + vdx[i];
			vy[i] = vy[i] + vdy[i]; 
			if (vx[i]>width || vx[i]<0 ) {
			   vdx[i] = -vdx[i]; 
			}
			if ( vy[i]>height || vy[i]<0 ) {
			   vdy[i] = -vdy[i]; 
			}
			ellipse(vx[i],vy[i],vtam[i],vtam[i]);
        }		
	}  
	pop();	

	push();	
	rect(xj+10,yj-6,10,10);	
	ellipse(xj, yj, raioJ, raioJ);
	fill(50);
	ellipse(xj, yj, 10, 10);
	pop();
	
	for (i=0; i<nd; i++) {  
		if (disparo[i]) {
			ellipse(xd[i],yd[i],raioD,raioD);
		}
	}
	
    novo_nivel = true;
	for (i=0; i<qt; i++) {
		if (vativo[i]) {
			novo_nivel = false;
		}
	}
	if (novo_nivel) {
		if (nivel >= 5) 
			tela = 4;
		}
		else {
			nivel++;
			atualizaNivel(); 
		}	
	}
	
	if (vidas<=0) {
		tela = 3;
	}	
}

function showTelaConclusao()
{
	push();
	background('green');
    fill(255);
	textSize(90)
    text("Parabéns!!!",20,260);
    textSize(20)
	text("Total máximo de pontos: 350",10,400);
	text("Total de pontos obtidos:    "+pontos,10,430)
    textSize(15)
    text("Clique em PLAY para reiniciar o jogo...",125,490);
	pop();
}

function showGameOver()
{
	push();
	background('red');
    fill(255);
	textSize(90)
	text("Game Over",20,260);
  	textSize(15)
    text("Clique em PLAY para reiniciar o jogo...",125,490);
	pop();
}

function keyPressed() 
{
    if (keyCode == CONTROL) {
		ud = (ud+1)%nd;
		disparo[ud] = true; 
		xd[ud] = xj+15;
		yd[ud] = yj;  	
	}	
	else if (tela == 1 && keyCode == 18) { 
		tela = 2;
	}
    return false; 
}

function atualizaNivel()
{
	if (nivel==1) {
		vspeed = 2;
		qt = 50;
      	cor='magenta';
        raioO=50
	}
	else if (nivel==2) {
		vspeed = 3;
		qt = 60;	
        cor='hsla(160, 100%, 50%, 0.5)';
        raioO=40
	}
	else if (nivel==3) {
		vspeed = 3;
		qt = 70;
        cor='blue';
        raioO=30
	}
	else if (nivel==4) {
		vspeed = 4;
		qt = 80;	
        cor=(50, 55, 100);
        raioO=20
	}
	else if (nivel==5) {
		vspeed = 5;
		qt = 90;
        cor='black';
        raioO=10
	}	

	for (i = 0; i < qt; i++) { 
		vx[i] = tamArea; 
		vy[i] = random(0,tamArea);
		vtam[i] = raioO;
		vdx[i] = random(-vspeed,vspeed);
		vdy[i] = random(-vspeed,vspeed);
		vcorR[i] = random(0,255);
		vcorG[i] = random(0,255);
		vcorB[i] = random(0,255);
		vativo[i] = true;
	}  

	xj = 30;
	yj = 30;
	ud = 0;  
	nd = 20;
	for (i=0; i<nd; i++) {  
		disparo[i] = false; 
	} 
}
