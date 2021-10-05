class Food{
  constructor(){
    
    this.a = [1,2,3,4];
       this.vmax = 5;
    this.vmin = 3;
    this.ran = random(this.a);
    if(this.ran == 1){this.x = width; this.y = random(50,height-50);this.vel = random(this.vmin,this.vmax);this.hot = floor(random(0,100));}
    else if(this.ran == 2){this.x = 0; this.y = random(50,height-50);this.vel = -random(this.vmin,this.vmax);this.hot = floor(random(0,100));}
    else if(this.ran == 3){this.x = random(50,height-50); this.y = height; this.vel = random(this.vmin,this.vmax);this.hot = floor(random(0,100));}
    else if(this.ran == 4){this.x = random(50,height-50); this.y = 0;this.vel = -random(this.vmin,this.vmax);this.hot = floor(random(0,100));}
    
  this.w = 50; 

 }

  offscreen(){
    if(this.ran == 1 && this.x <-100){return true;}
    else if(this.ran == 2 && this.x >width){return true;}
    else if(this.ran == 3 && this.y <50){return true;}
    else if(this.ran == 4 && this.y >height){return true;}
    else{return false;}
    
  }
  update(){
    
   if(this.ran == 1 || this.ran == 2){this.x -=this.vel;}
     if(this.ran == 3 || this.ran == 4){this.y -=this.vel;}
  }
  show(){
   if(this.hot%2 == 0){image(imgbowl,this.x,this.y,this.w,this.w);}
    else{image(imgapple,this.x,this.y,this.w,this.w);}
  }
  
}