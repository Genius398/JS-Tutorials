push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
noStroke();
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);
pop();