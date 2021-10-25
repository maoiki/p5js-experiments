var pontos = [];
var switched = false;


function preload(){
    Mansalva = loadFont('Mansalva.ttf')
}

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  for(i=0;i<5;i++){
    pontos[i] = new dots ();
  }
  
}

function draw() {
  
  stroke(0,100);
  strokeWeight(2);
  background(230);
  fill(0)
  for (i=0;i<pontos.length;i++){

    pontos[i].move();
    pontos[i].display();
    
  

  }
  
}



