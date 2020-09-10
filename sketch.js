const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(720,380,50,50);
    box2 = new Box(860,380,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(790,380);
    log1 = new Log(790,330,200,PI/2);
    bird1 = new Bird(200,200);
    box3 = new Box(720,310,50,50);
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    ground.display();
    
}
