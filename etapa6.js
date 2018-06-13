var x, y;
var raio = 40; 
var corBranco = true; 
var colisao = false; 
var dx; 
var dy; 
var raioJ = 5;


function setup() {
 createCanvas(490,510);
 x = 100; 
 y = 100;
  
 xInimigo = 450; 
 yInimigo = 255; 
 
 dx = 14
 dy = 20 

 frameRate(40); 
}


function draw() {
 background(200); 
 
 x=x+dx;
 y=y+dy; 

 if ( x > 490) {
   dx = -dx;   
 }
 if ( y > 510) {
   dy = - dy;   //
 }
 if ( x < 0 ) {
   dx = -dx;   
 }
 if ( y < 0 ) {
    dy = -dy;  
 }
 
 if ( dist(x,y,xInimigo,yInimigo) < raio+raioJ ) {
     if ( colisao == false) { 
       corBranco = ! corBranco;      
       colisao = true; 
     }
 }
 else {
    colisao = false;  
 }
 
 if ( corBranco ) {
   fill(255);
 }
 else {
   fill(255,0,0);
 }
 
 ellipse(xInimigo, yInimigo, 2*raio, 2*raio); 
 
 fill(230,230,0);
 ellipse(x,y,2*raioJ,2*raioJ); 
  
}
