function setup() {
  createCanvas(1200, 500);
  background(229, 225, 218);
}
let yPosition=250
let ySpeed= -3
let xPosition = 300
let xSpeed= 15;

let radius = 70;
let r= 255;
let g= 255;
let b= 255;

function draw() { 
  background(0)
  fill(r,g,b);
  noStroke()
  ellipse(xPosition, yPosition,radius,radius)
  
  // fill(random(255), random(255), random(255));
  //stroke((255), random(255), random(255));
  //ellipse(random(width), random(height), 10,10)

  if(yPosition<radius/2 || yPosition>height - radius/2){
    ySpeed *=-1
    r= random(255);
    g= random(255);
    b= random(255);
  }  
  if(xPosition<radius/2 || xPosition>width- radius/2){
    xSpeed*=-1
    r= random(255);
    g= random(255);
    b= random(255);
  }

  yPosition +=ySpeed
  xPosition +=xSpeed
}
