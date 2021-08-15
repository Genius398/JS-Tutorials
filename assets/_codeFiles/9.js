createCanvas(800,400);
speed = random(25,78)
weight = random(1000,4000)
thickness = random(25,90)

console.log(speed+":"+weight)

bullet = createSprite(-450,200,30,5)
bullet.velocityX = speed
bullet.shapeColor = "white"

wall = createSprite(700,200,thickness,300)
wall.shapeColor = "gray"

collided = false
wallInfo = false