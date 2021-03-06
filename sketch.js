//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database;
  dog = createSprite(250,250,50,50);
  dog.addImage(dog1);
  dog.sacle = 0.1

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  textSize(20);
  fill("black");
  stroke(18);
}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food: x
  })
}