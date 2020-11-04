var bullet;
var wall,thickness;
var speed;
var weight;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,10);
  thickness=random(22,83) 
  wall=createSprite(1500,200,thickness,height/2)
  speed=random(233,321)
  bullet.velocityX=speed
  weight=random(30,52)
  
}

function draw() {
  background(0); 
  
  
drawSprites();
if(hasCollied(bullet,wall)) 
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}

} 


}
function hasCollied(Lbullet,Lwall){
bulletRightEdge=Lbullet.x +Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false

}