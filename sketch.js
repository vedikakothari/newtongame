
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options = {
		isStatic: true
	}

	ground = Bodies.rectangle(400,670,800,30,ground_options);
	World.add(world,ground);

	var roof_options = {
		isStatic: true
	}
	roof = Bodies.rectangle(400,50,200,30,roof_options);
	World.add(world,roof);

	bobDiameter = 40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	rope1 =  new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 =  new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 =  new Rope(bob3.body,roof.body,0,0);
	rope4 =  new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5 =  new Rope(bob5.body,roof.body,bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30)

  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,200,30);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}