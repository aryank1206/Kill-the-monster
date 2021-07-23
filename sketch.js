const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(300,500,700,10)
  b1=new Box (200,490,50,300)
  b2=new Box (290,490,50,250)
  b3=new Box (380,490,50,200)
  b4=new Box (470,490,50,150)
  b5=new Box (530,490,50,100)
 hero1=new Hero(100,200,100,60)
 monster=new Monster(570,495,100,150)
  slingShot=new SlingShot(hero1.body,{x:100,y:200})
}

function draw() {
  background(255);
  Engine.update(engine);

  ground.display()
  fill("red");
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
 hero1.display();
monster.display();
  slingShot.display()
}

function mouseDragged(){
	Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
  }
