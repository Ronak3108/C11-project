var seaImg,shipImg,sea,ship;
sea = createSprite();

function preload(){
seaImg.loadImage("sea.png");
shipImg.loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(600,300);
  
  ship = createSprite(70,180,10,10);
  ship.addAnimation("ship",shipImg);
  sea.createSprite(10,200,600,10);
  sea.velocityX = -2;
  }


function draw() {

  background(seaImg);
 
if (sea.x < 0) {
  sea.x = sea.width/2;
}

ship.collide(sea);
drawsprites();
}