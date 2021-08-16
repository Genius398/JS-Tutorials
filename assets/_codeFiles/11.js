createCanvas(1600, 700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;

roofObject = new roof(width / 2, height / 4, width / 7, 20);

bobDiameter = 40;

startBobPositionX = width / 2;
startBobPositionY = height / 4 + 500;
bobObject1 = new bob(
  startBobPositionX - bobDiameter * 2,
  startBobPositionY,
  bobDiameter
);
bobObject2 = new bob(
  startBobPositionX - bobDiameter,
  startBobPositionY,
  bobDiameter
);
bobObject3 = new bob(startBobPositionX, startBobPositionY, bobDiameter);
bobObject4 = new bob(
  startBobPositionX + bobDiameter,
  startBobPositionY,
  bobDiameter
);
bobObject5 = new bob(
  startBobPositionX + bobDiameter * 2,
  startBobPositionY,
  bobDiameter
);

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false,
  },
});

rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter * 2, 0);

rope2 = new rope(bobObject2.body, roofObject.body, -bobDiameter * 1, 0);
rope3 = new rope(bobObject3.body, roofObject.body, 0, 0);
rope4 = new rope(bobObject4.body, roofObject.body, bobDiameter * 1, 0);
rope5 = new rope(bobObject5.body, roofObject.body, bobDiameter * 2, 0);
