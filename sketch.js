var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
PLAY=1
var END=2
  gameState=PLAY
 
var particles = [particle]
var plinkos = [];
var divisions=[]
var particle

var divisionHeight=300;
var score =0;
var count =0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
 
 
     for (var j = 75; j <=width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,75));
     }
 
     for (var j = 50; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,175));
     }
 
      for (var j = 75; j <=width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,275));
     }
 
      for (var j = 50; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,375));

        textSize(35)
        text()
     }}
 
function draw() {
  background("black");
   Engine.update(engine);
  textSize(20)
  text("Score : "+score,20,30);

  textSize(35)
  text("500",5,550)
  text("500",85,550)
  text("500",165,550)
  text("500",245,550)
  text("500",325,550)
  text("500",405,550)
  text("500",485,550)
  text("500",565,550)
  text("500",645,550)
  text("500",725,550)
  ground.display()

  if (gameState=="END"){
   background("black")
   fill("red")
   textSize(100)
   text("GAME OVER",200,400)
  } 
 
  
   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
     }
  
     /*for (var j = 0; j < particles.length; j++) {
    particles[j].display();
   }*/
   
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if (particle!=null){
     particle.display()

     if (particle.body.position.y>760)
     {
      if (particle.body.position.x > 300){
        score=score+500
        particle=null
        if(count>=5){gameState="END"}
      }
     }
   }
  
  
}

function mousePressed(){
  if (gameState!=="END"){
    particle=new Particle(mouseX,10,10,10)
    count++
  }
}