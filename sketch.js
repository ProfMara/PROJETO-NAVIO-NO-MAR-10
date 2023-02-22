var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
 
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
 
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo

    
  drawSprites();
}
