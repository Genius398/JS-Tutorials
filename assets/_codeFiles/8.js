createCanvas(600,600);
skybird = createSprite(100,300,10,10)
skybird.addImage(charImage)
skybird.scale = 0.5
skybird.depth = 5

sun = createSprite(500,100,10,10)
sun.addImage(sunImage)
sun.scale = 0.8
sun.depth = 1

score = 0
lives = 10

gameState = "playing"
planes = new Group()
coins = new Group()