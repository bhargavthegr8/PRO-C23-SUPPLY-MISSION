var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, heliSound;
var box1, box2, box3, box2a;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pos;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	heliSound= loadSound("helicopter.mp3");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	heliSound.loop();

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 180 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1=new Box(300,610,20,100);
	box2=new Box2(410,630,202,20);
	box2a=new Box(410,650,202,20);
	box3=new Box(520,610,20,100);
	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  

  keyPressed();

  box1.display();
  box2a.display();
  box3.display();
	
  imageMode(CENTER);
  image(packageIMG, this.packageBody.position.x,this.packageBody.position.y+20,40,40)
  drawSprites();
}

function keyPressed() {
	
    if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(this.packageBody,false);
	}
	
	if (keyDown(RIGHT_ARROW)) {
		helicopterSprite.x = helicopterSprite.x+20;
		Matter.Body.translate(this.packageBody,{x:20,y:0});
	}

	if (keyDown(LEFT_ARROW)) {
		helicopterSprite.x = helicopterSprite.x-20;
		Matter.Body.translate(this.packageBody,{x:-20,y:0});
	}
}



