var canon1IMG, canon1Sprite, canonSprite,canonIMG;
var canonBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	canon1IMG=loadImage("canon1.png")
	canonIMG=loadImage("canon.png")
	canonBallIMG=loadImage("canonBall.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
	ball = createSprite(60,500,30,20)
 //   ball.visible = false;
	ball.addImage(canonBallIMG)
	ball.scale=0.2

	canonSprite=createSprite(1100,500,10,10);
	canonSprite.addImage(canonIMG)
	canonSprite.scale=0.2

	canon1Sprite=createSprite(50, 500, 10,10);
	canon1Sprite.addImage(canon1IMG)
	canon1Sprite.scale=0.6
	//canon1Sprite.velocityX = 1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	canonBody = Bodies.circle(1100 ,500 , 10 , {restitution:0.6,density:1.0,friction:0.1, isStatic:true});
	World.add(world, canonBody);
	//canonBody.velocityX = 1;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
ball.visible = false;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  canonSprite.x= canonBody.position.x 
  canonSprite.y= canonBody.position.y 
 // canonSprite.x = canon1Sprite.x
  canonSprite.collide(groundSprite);

  text ("shoot the cannons",200,300)
  text ("press down arrow to shoot ",200,400)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 //   Matter.Body.setStatic(canonBody,false);
	canon1Sprite.velocityX =0;
	ball.visible = true;
ball.velocityX = 10 + 10;
ball.velocityY = -3;
ball = createSprite(60,503,30,20)
//   ball.visible = false;
   ball.addImage(canonBallIMG)
   ball.scale= 0.1
  }
}



