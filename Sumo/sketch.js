let life = 4;
let timer = 180;
let player;
let food = [];
let poison = [];
let fx = [];
let fy = [];
let pox = [] ;
let poy = [];
var toxin = 0;
var toxinW = 25;
var score = 150;
let music;
let fart;
let imgbkg;
let imgplate;
let imgsumo;
let imgbowl;
let imgsbowl;
let imgfish;
let imgapple;
let diff = 0.0001
function preload(){
    imgbkg = loadImage('sumo mat.jpg');
  imgplate = loadImage('plate.jpg');
  imgsumo = loadImage('sumo.png');
  imgbowl = loadImage('bowl.png');
  imgsbowl = loadImage('Sbowl.png');
  imgfish = loadImage('deadfish.png');
   imgapple = loadImage('apple.png');
  music = loadSound('consumo.mp3');
   fart = loadSound('Fart.mp3');
}

function setup() {
  createCanvas(600, 600);
  player = new Player();
  food.push(new Food());
  poison.push(new Poison());
  music.play();
  setInterval(timeCount,1000);
}

function timeCount(){
  timer-=1;
  diff += 0.00009
}

function foodCollide(){
  for(var i = food.length-1 ; i>=0;i--){
  let px = player.x+player.w/2;
  let py = player.y+player.w/2;
  fx[i] = food[i].x + food[i].w/2; 
  fy[i] = food[i].y + food[i].w/2;
    var d = dist(px,py,fx[i],fy[i]);
    if(d<50){
      food.splice(i, 1);
      score += 3;
    }
  }
}

function keyPressed(){
 if(keyCode == 'm'){
  restart(); 
 }
}
function restart(){
loop();
  setup();
}

function poisonCollide(){
  for(var i = poison.length-1 ; i>=0;i--){
  let px = player.x+player.w/2;
  let py = player.y+player.w/2;
  pox[i] = poison[i].x + poison[i].w/2; 
  poy[i] = poison[i].y + poison[i].w/2;
    var d = dist(px,py,pox[i],poy[i]);
    if(d<50){
      poison.splice(i, 1);
      score += -5;
      toxin +=1;
      fart.play();
      fart.setVolume(1.5);
      if(toxin > 4){life -=1; toxin = 0;}
    }
  }
}

function lose(){
 if(life == 0){
   fill(0,200);
   rect(0,0,width,height);
   fill(255);
   textSize(50);
   text("Better luck next time",100,height/2-25);
   textSize(25);
   text("Your Score is:"+score,200,height/2+25);
   music.stop();
   noLoop();
 } 
}
function draw() {
  background(220);
  image(imgbkg,0,0,width,height);
  image(imgplate,0,0,width,50);
  if(keyIsDown(UP_ARROW)){player.moveUp();}
  if(keyIsDown(DOWN_ARROW)){player.moveDown();}
  if(keyIsDown(RIGHT_ARROW)){player.moveRight();}
  if(keyIsDown(LEFT_ARROW)){player.moveLeft();}
  if(random(1)<diff){food.push(new Food());}
  for(var i = food.length-1 ; i>=0;i--){
    
    food[i].show();
    food[i].update();
    if (food[i].offscreen()) {
      food.splice(i, 1);
    }
  }
  
  if(random(1)<diff){poison.push(new Poison());}
  for(var i = poison.length-1 ; i>=0;i--){
    poison[i].show();
    poison[i].update();
    if (poison[i].offscreen()) {
      poison.splice(i, 1);
    }
  }
  
  fill(255);
  rect(150,10,100,20);
  fill(0,150,0);
  rect(150,12,toxin*toxinW,16);
  player.update();
  foodCollide();
  poisonCollide();
  player.show();
  fill(255);
  textSize(20);
  text("Weight: "+score+" lb",440,25);
  text("Life: "+life,20,25);
  lose();
  text("Time Remaining:"+timer,250,25);
}