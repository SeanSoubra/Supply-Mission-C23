var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, containerSide1, containerSide2, containerSide3, containerSide1Body, containerSide2Body, containerSide3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);

	containerSide1 = createSprite(400, 650, 250, 20, {isStatic:true})
	containerSide1.shapeColor = color(255, 0, 0)
	World.add(world, containerSide1)

	containerSide2 = createSprite(285, 580, 20, 125, {isStatic : true})
	containerSide2.shapeColor = color(255, 0, 0)
	World.add(world, containerSide2)

	containerSide3 = createSprite(515, 580, 20, 125, {isStatic : true})
	containerSide3.shapeColor = color(255,0,0)
	World.add(world, containerSide3)

	containerSide1Body = Bodies.rectangle(400, 635, 250, 20, {isStatic : true})
	World.add(world, containerSide1Body)

	containerSide2Body = Bodies.rectangle(285, 580, 20, 125, {isStatic : true})
	World.add(world, containerSide2Body)

	containerSide3Body = Bodies.rectangle(515, 580, 20, 125, {isStatic : true})
	World.add(world, containerSide3Body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody, false)
    
  }
}



