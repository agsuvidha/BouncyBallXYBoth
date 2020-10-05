var fixedRect, movingRect, edges;

function setup() {
  createCanvas(500,500);
  fixedRect = createSprite(0, 400, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 0, 50 ,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  movingRect.velocityY = 5;
  fixedRect.velocityX = 5; 
  fixedRect.velocityY = -5;

  edges = createEdgeSprites();
}

function draw() {
  background(0,0,0);  


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  
  drawSprites();
}