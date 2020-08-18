class Mango{
    constructor(x, y,radius){
        var options = {
            'friction':1.0,
            'restitution':0,
            'isStatic':true
        }
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, y,radius/2, options);
        this.radius=radius;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0, 0,this.radius*2,this.radius*2);
        pop();
      }
    }

  