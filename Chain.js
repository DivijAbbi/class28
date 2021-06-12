class Chain{
constructor(bodyA,bodyB){
  var options= {
   bodyA:bodyA,
   bodyB:bodyB,
   length:20,
   stiffness:0.04

  }  
  this.chain=Constraint.create(options);
  World.add(world,this.chain);
}
    display() {
     var a=this.chain.bodyA.position;
     var b=this.chain.bodyB.position;
     strokeWeight(3);
     line(a.x,a.y,b.x,b.y) 
    }






}