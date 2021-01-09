
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform = new Platform(400, 300, 400, 50);

	bulb1 = new Bulb(650, 300, 49);
	bulb2 = new Bulb(450, 400, 49);
	bulb3 = new Bulb(350, 400, 49);
	bulb4 = new Bulb(250, 400, 49);

	rope1 = new Rope(bulb1, {x :550, y: 300});
	rope2 = new Rope(bulb2, {x :450, y: 300});
	rope3 = new Rope(bulb3, {x :350, y: 300});
	rope4 = new Rope(bulb4, {x :250, y: 300});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  platform.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  bulb1.display();
  bulb2.display();
  bulb3.display();
  bulb4.display();

  drawSprites();
 
}



