const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  box1= new  Box(726,508,50,50)
  box2=new Box(900,500,50,50)
  ground=new Ground(600,550,1200,20)
  console.log("Pi val " + PI/2)
 log=new Log(811,420,300,PI/2) 
 box3= new  Box(730,415,50,50)
  box4=new Box(910,400,50,50)
  log2=new Log(820,350,300,PI/2)
  box5=new Box(815,330,60,60);
  log3=new Log(850,270,120,-PI/7);
  log4=new Log(760,270,120,PI/7);
 // bird = new Bird(200,300,80,80)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    text (mouseX+"       "+mouseY,mouseX,mouseY)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    log.display();
    log2.display()
    box5.display();
    log3.display();
    log4.display();
  // bird.display()
}