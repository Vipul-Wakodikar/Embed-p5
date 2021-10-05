// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var ball1;
var balls = [];
var ground;
var boundaries = [];

var color_list = ['#007fff','#ff007f','#ff8000','#ffbf00','#ff007f','#ff0000'];
function setup() {
  createCanvas(400, 400);
  //world = engine.world;
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  boundaries.push(new Boundary(150,100,width*0.6,10,0.3));
  boundaries.push(new Boundary(250,300,width*0.6,10,-0.3));
  World.add(world,boundaries);
}

function mouseDragged(){
  
 balls.push(new Balls(mouseX,mouseY,random(10,15),random(color_list))); 
}
function draw() {
  background(220);
  text("Click anywhere on the screen",10,15);
  for(var i = 0; i<balls.length;i++){
    
    balls[i].show();
  }
  for(var i = 0; i<boundaries.length;i++){
  boundaries[i].show()
  }
}