
var a;
var diam;
var x;
var y;

function setup () {
  background(255);
    createCanvas(600,400);
  
  
  
 var i;
 
 for(i=1; i<height; i++){
   stroke(i/5,i/2,i/1);
   line(0,i,width,i);
   
 }
 
 noStroke();
  rect(0,330,600,70);
}

function draw() {
  // Each time through draw(), new random 
  // numbers are picked for a new ellipse.
  
  a = random(255);
  diam = random(5);
  x = random(width);
  y = random(height-200);

  // Use values to draw an ellipse
  noStroke();
  fill(255, 255, 255, a);
  ellipse(x, y, diam, diam);
  ellipse(520,300,70,70);
  ellipse(520,250,50,50);
  
   stroke(0);
  strokeWeight(6);
  point(510,248);
  point(530,248);
  
  strokeWeight(3);
  noFill();
  arc(520,150,210,210,radians(87),radians(93));
  
  fill(250,0,0);
  noStroke();
  rect(495,265,49,10,5);
  triangle(540,265,556,270,553,264);
  
  stroke(0);
  strokeWeight(4);
  point(520,282);
  point(520,295);
  point(520,308);
}
   