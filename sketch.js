var zombiei,bulleti,guni,backgrouu;
var ci,bullet;
var bulletgroup,zombiegroup,zombie;
var j;
function preload(){
   zombiei=loadImage("zombie-155403.png") 
   bulleti=loadImage("bullet-26507_1280.png")
   guni=loadImage("gun_PNG1373.png");
   backgrouu=loadImage("bcak.jpg")
   ci=loadImage("mag-alert-valor-soldier1.png");
}

function setup(){
createCanvas(displayWidth,displayHeight)
j=createSprite(displayWidth/2-100,displayHeight/2+100,50,50);
j.addImage(ci);
j.scale=0.4;
bulletgroup=createGroup();
zombiegroup=createGroup();


}


function draw(){
background(backgrouu)
j.x=mouseX;
j.y=mouseY;

if(keyDown("space")){
   if(frameCount%10===0){
   bullet=createSprite(mouseX,mouseY,10,10);
   bullet.addImage(bulleti)
   bullet.scale=0.03
   bullet.velocityX=2;
   bulletgroup.add(bullet);
}5

}
if(frameCount%100===0){
   zombie=createSprite(displayWidth,random(50,displayHeight-100),50,50)
   zombie.addImage(zombiei)
   zombie.scale=0.4;
   zombie.velocityX=-2;
   zombiegroup.add(zombie);
}
if(bulletgroup.isTouching(zombiegroup)){
zombiegroup.destroyEach();
bulletgroup.destroyEach();
}
drawSprites();

}



