// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var plywood = [];
var balls = [];
//var rotation = 0;
var diff = 0.05;
function setup() {
   createCanvas(440, 440);
   engine = Engine.create();
   Engine.run(engine);
  plywood.push(new Plywood(width/2,height/2,150,20));
}

function draw() {
  background(220);
  
  if(random(1)<diff){
  balls.push(new Balls(random(200,240),0,random(15,15),'#5a5a5a'));
  }
    for(var i = balls.length-1; i>=0;i--){
    
    balls[i].show();
      if(balls[i].isOffscreen()){
         balls.splice(i,1);
         }
  }
  
  for(var i = 0;i<plywood.length;i++){
    plywood[i].show();
    plywood[i].updateRotation(PI/6);
  }
  
  translate(150,150);
  rotate(radians(30));
}