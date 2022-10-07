
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	var plane_options={
		isStatic: true
	}

	var circulo_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir:0
	}

	var quadrado_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir:0.1
	}

	var retangulo_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir:0.3
	}

	//Crie os Corpos Aqui.
 chao = Bodies.rectangle(250,490,500,200,plane_options);
  World.add(world,chao);

  circulo = Bodies.circle(220,10,30,circulo_options);
  World.add(world, circulo);

  quadrado = Bodies.rectangle(110,50,70,70,quadrado_options);
  World.add(world,quadrado);

  retangulo = Bodies.rectangle(350,50,60,50,retangulo_options);
  World.add(world,retangulo);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("darkBlue");

  Engine.update(engine);
  
  fill("purple")
 rect(chao.position.x, chao.position.y, 500,200);

 ellipse(circulo.position.x, circulo.position.y, 30);

 rect(quadrado.position.x, quadrado.position.y,70,70);

 rect(retangulo.position.x, retangulo.position.y,60,50);

  drawSprites();
 
}



