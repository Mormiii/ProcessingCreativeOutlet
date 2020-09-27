// circle class
class Circle{
  constructor(a,b){
    this.x = width/2;
    this.y = height/2;
    this.sizeX = a;
    this.sizeY = b;
  }
  
  move(){
    let randNum = random(1.00);
    if (randNum < 0.5){
      this.x +=2;
    }
    
    else{
      this.x -=2;
    }
  }
  display(){
    stroke(0);
    ellipse(this.x,this.y,this.sizeX,this.sizeY);
  }
}
let circle1;
let circle2;
let circle3;


function setup() {
  createCanvas(600,300);
  background(150);
  circle1 = new Circle(50,50);
  circle2 = new Circle(50,50);
  circle3 = new Circle(50,50);
}


function draw() {
  fill(100,40,random(120), random(255));
  circle1.move();
  circle1.display();
  fill(random(100),120,170, random(120));
  circle2.move();
  circle2.display();
  fill(40,random(220),120,random(50));
  circle3.move();
  circle3.display();
}
