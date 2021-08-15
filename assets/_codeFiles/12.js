constraint1={
    bodyA:bobObject1.body,
    bodyB:roofObject.body,
    pointB: {x:-bobDiameter*2, y:0}
}
constraint2={
    bodyA:bobObject2.body,
    bodyB:roofObject.body,		
    pointB: {x:-bobDiameter, y:0}
}
constraint3={
    bodyA:bobObject3.body,
    bodyB:roofObject.body,		
    pointB: {x:0, y:0}
}
constraint4={
    bodyA:bobObject4.body,
    bodyB:roofObject.body,		
    pointB: {x:bobDiameter, y:0}	
}
constraint5={
    bodyA:bobObject5.body,
    bodyB:roofObject.body,		
    pointB: {x:bobDiameter*2, y:0}
}
var pendulum1=Constraint.create(constraint1)
var pendulum2=Constraint.create(constraint2)
var pendulum3=Constraint.create(constraint3)
var pendulum4=Constraint.create(constraint4)
var pendulum5=Constraint.create(constraint5)
World.add(world, pendulum1);
World.add(world, pendulum2);
World.add(world, pendulum3);
World.add(world, pendulum4);
World.add(world, pendulum5);