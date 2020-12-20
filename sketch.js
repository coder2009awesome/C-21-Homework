var wall, thickness;
var bullet, speed, weight;

function setup() {
  bullet = createSprite(50,200,100,5);
  bullet.shapeColor = ("white")
  wall = createSprite(1500,200, 60,30);
  wall.shapeColor = ("black")
}
function draw() {
  drawSprites();/*
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);


    if (damage>=10)
    {
      wall.shapeColor = ("red")


    }
    if (damage<10)
    {
      wall.shapeColor = ("green")
    }
  }*/
}/*
function hasCollided() {
  console.log("hello world 5");
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  else
  {
  return false;
  }
}
console.log("hello world 6");