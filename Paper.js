class crumbledPaper {

  constructor(x, y, r) {

    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:0.8,
      }

   this.x=x;
   this.y=y;
   this.r=r
   this.image=loadImage("paper.png");
   this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)     
    World.add(world, this.body);
  }

  display(){
    
    var crumbledPaperpos =this.body.position;
   
    push()
    translate(crumbledPaperpos.x, crumbledPaperpos.y);
    rectMode(CENTER);
    //strokeWeight(3);
   // fill(255,0,255);
    //fill(255,0,255);
    //fill("white");
    //ellipse(20,20,this.r,this.r);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
  }
 };
