function draw() {
    background(0,0,0);  
    text("BULLET TEST SIMULATOR 1.0",10,300)
    text("made by Ishan",10,350)
    if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
        collided = true
  }
    text("SPEED: "+Math.round(speed)+"  "+"WEIGHT:"+Math.round(weight)+"  "+"THICKNESS: "+Math.round(thickness),400,50)
  if(collided===true){
    bullet.velocityX = random(-1,-2)
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    wallInfo = true
    collided = false
    bullet.rotationSpeed = random(60,-60)
    bullet.velocityY = random(3,-3)
  }
    if(damage>10&&wallInfo===true){
      wall.shapeColor = "red"
      text("damage: "+Math.round(damage)+" :DISCARDED",400,70)
    }
    if(damage<10&&damage>5&&wallInfo===true){
      wall.shapeColor = "yellow"
      text("damage: "+Math.round(damage)+" :AVERAGE",400,70)
    }
    if(damage<5&&wallInfo===true){
      wall.shapeColor = "green"
      text("damage: "+Math.round(damage)+" :OKAY",400,70)
    }
  
    drawSprites();
  }