// circle class, with step function
class Circle {
  constructor(a,b){
    this.tx = a;
    this.ty = b;
    this.x = 0;
    this.y = 0;
  }

  step(){
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, width);
    this.tx +=0.005;
    this.ty +=0.005;
    
  }
}
let cNoise;
let cNoise1;
let cNoise2;

function setup(){
  background(70);
  createCanvas(600,600);
  cNoise = new Circle(0,100);
  cNoise1 = new Circle(50,250);
  cNoise2 = new Circle(75,150);
}

function draw(){
  let alpha = 50;
  stroke(alpha);
  fill(166,135,242,alpha);
  cNoise.step();
  ellipse(cNoise.x,cNoise.y,30,30);
  fill(116,89,180,alpha);
  cNoise1.step();
  ellipse(cNoise1.x,cNoise1.y,30,30);
  fill(79,67,106,alpha);
  cNoise2.step();
  ellipse(cNoise2.x,cNoise2.y,30,30);
  alpha -=0.1;
  //save("3walker.tif");
}
