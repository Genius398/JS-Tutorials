canvas = createCanvas(windowWidth-0,windowHeight-0)
engine = Engine.create();
world = engine.world;
world.gravity.y = 0
Engine.run(engine)
var rand = random(300,400)
for(var i=0;i<rand;i++){
    asteroids.push(new Asteroid())
}
player = new Player()
document.oncontextmenu = function(){return false;}