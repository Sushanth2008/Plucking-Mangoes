class Boy{

    constructor(x, y, width, height){
        var options = {
            'friction':1.0,
            'density':1.2,
            'stiffness':0.004,
            'restitution':0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
        pop();
      }
    }