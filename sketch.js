var sea,ship;
var seaImg,shipImg;
var counter = 0;
function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
  

  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
  
  
  
}

function draw() {
  background(0);

  sea.velocityX = -3;
  counter++;

  if (counter % 15 == 0)
  { 
    if (ship.y == 200) {
    ship.y -= 10;
    ship.x += 10;
    }
else
{
    ship.y += 10;
    ship.x -= 10;
}
  }

  //uncomment code to reset the background
  if(sea.x < 0){

   
    //sea.x = 0;
    sea.x = 400;
    //sea.x = sea.width;
    //sea.x = sea.width;
    //sea.x = sea.width/8;
   //sea.x = sea.width/8;
    //sea.y = height;
    //sea.y = sea.height;
  }
  
  drawSprites(); 
}