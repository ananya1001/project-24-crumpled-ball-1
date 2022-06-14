
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,leftdustbin,basedustbin,rightdustbin,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,500,20)
	console.log(paper)
	leftdustbin=new Dustbin(600,650,10,100)
	basedustbin=new Dustbin(650,680,100,10)
	rightdustbin=new Dustbin(700,650,10,100)
	ground=new Ground(400,690,800,10)

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-58})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  leftdustbin.display();
  rightdustbin.display();
  basedustbin.display();
  ground.display();

 
}



