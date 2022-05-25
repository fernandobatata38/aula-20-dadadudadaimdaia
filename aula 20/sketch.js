const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pedro_a_pedra;

let engine;
let world;
var ball;
var ground;




function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
  var pedro_a_pedra_options={
    restitution : 0.85,
    frictionAir : 0.01
  }
  
  pedro_a_pedra=Bodies.circle(200,10,20,pedro_a_pedra_options);
  World.add(world,pedro_a_pedra);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  ellipse(pedro_a_pedra.position.x,pedro_a_pedra.position.y,20);
}

