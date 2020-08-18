
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1370,620);


	engine = Engine.create();
  world = engine.world;
  
  stone=new Stone(120,530,20)
  boy=new Boy(200,550,200,200)
  ground=new Ground(700,615,1500,20)
  tree=new Tree(1100,640,500,650)
  mango1=new Mango(1100,100,20)
  mango2=new Mango(1180,120,20)
  mango3=new Mango(1200,180,20)
  mango4=new Mango(1000,160,20)
  mango5=new Mango(1200,220,20)
  mango6=new Mango(1000,240,20)
  mango7=new Mango(1100,220,20)
  mango8=new Mango(1300,220,20)
  mango9=new Mango(950,220,20)
  mango10=new Mango(1050,170,20,20)
  rope=new Rope(stone.body,{x:120,y:500})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  stone.display()
  boy.display()
  tree.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  rope.display()
  
  
  drawSprites();
 
}

function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

rope.fly();

}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.radius+lstone.radius){    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }