function Balls(x,y,r,col){
  var options = {
   friction: 0,
   restitution: 0.8
  
  }
  this.body = Bodies.circle(x,y,r,options);
  World.add(engine.world, [this.body]);
  this.r = r;
  this.col = col;
  
  this.isOffscreen = function(){
  var pos = this.body.position;
    return(pos.y>height+50);
  }
  
  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.col)
    strokeWeight(3);
    ellipse(0,0,this.r*2)
    strokeWeight(1);
    line(0,0,this.r/2,this.r);
    pop();
  }
}