
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
function preload(){
  var score;
  var survivalTime=0;
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  monkey= createSprite(130,246,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale= 0.16;
  ground= createSprite(200,300,1000,20);
  score=0;
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background("skyblue");

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 0,500)
  
  
  ground.velocityX=-2
  
  if (ground.x<200){
    ground.x=200;
  }
  if (keyDown("space")&& monkey.y >= 225){
    monkey.velocityY=-15
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
if (FoodGroup.isTouching(monkey)){
   score= score+ 3;
   FoodGroup.destroyEach();
  }
  
  if (obstacleGroup.isTouching(monkey)){
    
    
    
    
  }
  
  
  
  
    drawSprites();

}

function spawnFood(){
  if (frameCount % 80 === 0) {
    var fruit = createSprite(600,200,40,10);
    fruit.y = Math.round(random(120,200));
    fruit.addImage(bananaImage);
    
    fruit.velocityX = -3;
    FoodGroup.add(fruit);
    fruit.lifetime= 600
    fruit.scale= 0.1
    
  }
}


function spawnObstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(600,256,20,20)
    obstacle.x= Math.round(random(520,600))
    obstacle.velocityX= -5;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=500;
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.2
  }
} 




