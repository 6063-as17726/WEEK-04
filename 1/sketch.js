function setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkred');
  fill(255);
}
let xPos = 0; 
let xVelocity = 10;

function draw() {
  background('darkred');
 ellipse(xPos,50,50,50); 

xPos = xPos + xVelocity; 

if(xPos>width){
xVelocity = -5;
 }
 if (xPos<0)
 {
  xVelocity = 5;
 }}