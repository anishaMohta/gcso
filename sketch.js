var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(300,1600);
  car= createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="white";
  
}

function draw() {
  background(0);  
  drawSprites();
}