
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, leftWall, rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 1000);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution : 0.8,
		friction : 0,
		density : 1.2

	}

	ball = Bodies.circle(50,800,20,ball_options);
	World.add(world,ball);


ground = new Ground(width/2,height-30,width,20);
leftWall = new Ground(1100,840,20,230);
rightWall = new Ground(1450,840,20,230);

	
  
}


function draw() {

Engine.run(engine);
 rectMode(CENTER);
  background(0);
  
  ground.display();
  leftWall.display();
  rightWall.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20,20);


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x: 6,y: -8});
	}
}


