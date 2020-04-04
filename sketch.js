var raindrops;



function setup() {
var canvas=createCanvas(400,400);
}

function draw() {
  background(200,200,200);
  if(World.frameCount%5===0) {
  for(var i=0;i<400;i=i+4){
    fill(0,255,255)
    let rand=random(5,20);
raindrops=createSprite(i,0,2,rand);
raindrops.velocityY=5;

  } 
}
  drawSprites();
}