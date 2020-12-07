
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3;
var paper,ground;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(1057,460,20,170);
	box2 = new Box(975,532	,150,20);
	box3 = new Box(892,460,20,170);

	paper = new Paper(50,500,25);
	ground = new Ground(600,570,1200,20);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-140})
	}
}



