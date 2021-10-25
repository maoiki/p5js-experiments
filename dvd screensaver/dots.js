class dots{
  constructor(){
  this.x = random (1,400);
  this.y = random (25,500);
  this.X = random (-2,2);
  this.Y = random (-2,2);
  this.r = random(1,255);
  this.g = random(1,255);
  this.b = random(1,255);
  }
  colorchange() {
    if(!switched){
        this.r = random(1,255);
        this.g = random(1,255);
        this.b = random(1,255);
        switched = true
      }
    else if (switched){
        this.r = random(1,255);
        this.g = random(1,255);
        this.b = random(1,255);
        switched = false;
      }
  } 
  
  move(){
    this.x += this.X;
    this.y += this.Y;
    
    
    //using box size of the "maoiki" text to fix collision locations
    if (this.x<0 || this.x>(500-100)) {
      
      this.X = this.X*-1
       this.colorchange(); 
     
    }
    if (this.y<25 || this.y>500){
     
      this.Y = this.Y*-1
      this.colorchange();
      
    }
  }
  
  
  
  display(){
  
  fill(this.r,this.g,this.b)
  textFont(Mansalva);
  textSize(36);
    
  //the box size of this text is approximately (100,25)  
  text('Maoiki',this.x,this.y);
  
  }
  
  
}