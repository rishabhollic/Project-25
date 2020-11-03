 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var dustbinObj,crumbledPaperObject,groundObject
 //var dustbinObjImage,crumbledPaperObjectImage
 var engine,world;

 function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;


	crumbledPaperObject=new crumbledPaper(200,300,70);
	groundObject=new ground(width/2,370,width,20);
	dustbinObj=new dustbin(1000,350);
	
	Engine.run(engine);
 }

 function draw() {

 rectMode(CENTER);
  background(230);

 // dustbinObjImage.display();
  //crumbledPaperObjectImage.display();
  crumbledPaperObject.display();
  groundObject.display();
  dustbinObj.display();
  
 }

 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(crumbledPaperObject.body,crumbledPaperObject.body.position,{x:82,y:-82});
	 }
 }