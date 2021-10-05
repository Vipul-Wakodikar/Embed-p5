function Plywood(x,y,w,h){
  var options = {
   friction: 0,
   restitution: 0.6,
   isStatic: true,
   angle: 0
  }
  
  var Body = Matter.Body;
  
  
  this.body = Bodies.rectangle(x,y,w,h,options);
  World.add(engine.world, [this.body]);
  this.w = w;
  this.h = h;
  
    this.updateRotation = function() {
   Body.rotate(this.body, 0.05);
}
  
  
  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    //noStroke();
    fill(127);
    rect(0,0,this.w,this.h)
    pop();
  }
}