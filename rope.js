class Rope{

constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.008,
    length:1
    }

this.bodyA=bodyA;
this.pointB=pointB;
this.body=Constraint.create(options);
World.add(world,this.body);


}

fly (){
    this.body.bodyA=null;
    }

attach(body){
 this.body.bodyA=body;   
}    

display(){

if(this.body.bodyA){
var pointA=this.body.bodyA.position;
var pointB=this.pointB;
strokeWeight(2)
line (pointA.x,pointA.y,pointB.x,pointB.y);
}
}


}