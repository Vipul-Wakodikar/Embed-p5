// let imgsumo;
class Player{
 constructor(){
  this.x = width/2-25;
   this.y = height/2-25;
   this.w = 80;
   this.vel = 10;
   // imgsumo = loadImage('sumo.png');
 }
  
  moveUp(){
    this.y -= this.vel;
  }
  
  
  moveDown(){
    this.y += this.vel;
  }
  
  
  moveRight(){
    this.x += this.vel;
  }
  
  
  moveLeft(){
    this.x -= this.vel;
  }
  
  update(){
  if(this.x<-50 || this.x>width || this.y<25 || this.y>height)
  {this.x = width/2-25;
   this.y = height/2-25;
  life-=1;
  }
  }
  
  show(){
    fill(0,0,255);
   image(imgsumo,this.x,this.y,this.w,this.w); 
  }
  
}