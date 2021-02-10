var mrect,frect
function setup() {
  createCanvas(1200,800);
  mrect=createSprite(400, 200, 80, 30);
  frect=createSprite(600,400,50,80);
  mrect.shapeColor = "green";
  frect.shapeColor = "green";
 
  gob1=createSprite(100, 100, 50, 50);
  gob2=createSprite(300,100,50,50);
  gob1.shapeColor = "green";
  gob2.shapeColor = "green"
}

function draw() {
  background(0); 
  mrect.x=World.mouseX;
  mrect.y=World.mouseY; 
 
  if (isTouching(mrect,gob1)){
    mrect.shapeColor = "yellow";
    gob1.shapeColor = "yellow";
    
  }
  else{
    mrect.shapeColor = "green";
    gob1.shapeColor = "green";
  }
  drawSprites();
}
