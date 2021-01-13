var fixedRect, movingRect,fixed1,fixed2,fixed3;
 
function setup() {
  createCanvas(1200,800);
 
  fixed1 = createSprite(60, 490, 50, 50);
  fixed1.shapeColor = "green";
  fixed1.debug = true;

  fixed2 = createSprite(500, 40, 50, 50);
  fixed2.shapeColor = "green";
  fixed2.debug = true;

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  fixed3 = createSprite(300, 480, 50, 50);
  fixed3.shapeColor = "green";
  fixed3.debug = true;
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}
 
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(collision(movingRect,fixedRect)) {
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "blue";
 }
  else{
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }

  if(collision(movingRect,fixed1)) {
    movingRect.shapeColor = "white";
    fixed1.shapeColor = "red";
 }
  else{
    movingRect.shapeColor = "green";
    fixed1.shapeColor = "green";
  }

  if(collision(movingRect,fixed2)) {
    movingRect.shapeColor = "white";
    fixed2.shapeColor = "gray";
 }
  else{
    movingRect.shapeColor = "green";
    fixed2.shapeColor = "green";
  }

  if(collision(movingRect,fixed3)) {
    movingRect.shapeColor = "white";
    fixed3.shapeColor = "yellow";
 }
  else{
    movingRect.shapeColor = "green";
    fixed3.shapeColor = "green";
  }

  drawSprites();
}
 

 
function collision(object1, object2) {
 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
     {
      return true;
     }
else {
  return false ;

}
}
 