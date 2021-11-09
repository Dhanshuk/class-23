const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine,world,ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create()
  world = engine.world;
  

  
   var ball_options = {
    restitution: 1,
    frictionAir:0.00000000000000000001
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,20);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

