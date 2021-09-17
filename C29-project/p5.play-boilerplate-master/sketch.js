const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  ground = new ground();
  stand1 = new  Stand(380,300,270,10);
  stand2 = new  Stand(700,200,200,10);
   
  block1 = new Block(120,235,30,40);
  block2 = new Block(150,235,30,40);
  block3 = new Block(180,235,30,40);
  block4 = new Block(210,235,30,40);
  block5 = new Block(240,235,30,40);
  block6 = new Block(270,235,30,40);
  block7 = new Block(300,235,30,40);
  block8 = new Block(330,235,30,40);


  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11= new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,140,30,40);
  blocks7 = new Block(700,140,30,40);
  blocks8 = new Block(730,140,30,40);
  blocks9 = new Block(760,140,30,40);

 ball = Bodies.circle(50,200,20);
 World.add(world,ball);

 slingshot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
  background("white");
  Engine.update(engine);
  
  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();
 fill("black")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("orange")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

   fill("violet")
  block15.display();
  block16.display();
  
  fill("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();

   text("drag the line and release to hit the boxes",600,220)
   ellipse(ball.position.x,ball.position.y,20);
   slingShot.display();



   function mouseDragged(){
     Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

   }

  function mouseReleased(){
    slingShot.fly();
  }


  drawSprites();
}