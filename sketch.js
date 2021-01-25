var canvas;
var music;
var tile1, tile2, tile3, tile4;
var wall1, wall2, wall3, wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    tile1 = createSprite(100,500,120,10);
    tile1.shapeColor = "red";
    tile2 = createSprite(300,500,120,10);
    tile2.shapeColor = "blue";
    tile3 = createSprite(500,500,120,10);
    tile3.shapeColor = "green";
    tile4 = createSprite(700,500,120,10);
    tile4.shapeColor = "yellow";

    wall1 = createSprite(0,300,1,600);
    wall1.shapeColor = "black";
    wall2 = createSprite(800,300,1,600);
    wall2.shapeColor = "black";
    wall3 = createSprite(400,0,800,1);
    wall3.shapeColor = "black";
    wall4 = createSprite(400,600,800,1);
    wall4.shapeColor = "black";
    
    //create box sprite and give velocity
    box = createSprite(100,200,10,10);
    box.x = Math.round(random(20,750));
    box.shapeColor = "white";
    box.velocityY = 8;
    box.velocityX = 6;

}

function draw() {
    background("black");

    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it bounceOff
    
    if(tile1.isTouching(box) && box.bounceOff(tile1)){
      box.shapeColor = "red";
      music.play();
    }
    if(tile2.isTouching(box) && box.bounceOff(tile2)){
      box.shapeColor = "blue";
      music.play();
    }
    if(tile3.isTouching(box) && box.bounceOff(tile3)){
      box.shapeColor = "green";
      music.play();
    }
    if(tile4.isTouching(box) && box.bounceOff(tile4)){
      box.shapeColor = "yellow";
      music.play();
    }

    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    box.bounceOff(wall4);

    drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
  }
