var ghost, ghost_anim
 function preload() {
 ghost_anim.loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
createCanvas(600,600);

ghost=createSprite(300,550,20,20);
ghost.addAnimation("ghostanimation",ghost_anim);
}

function draw(){
 background("lightblue")
 drawSprites();
  
}