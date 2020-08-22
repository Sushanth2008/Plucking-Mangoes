class Boy{

    constructor(x, y, width, height){
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.wallThickness=10;
      this.image = loadImage("boy.png");
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true})
      this.leftWallBody=Bodies.rectangle(0, this.y-this.height/2, this.wallThickness, this.height, {isStatic:false})
      this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:false})
      World.add(world, this.bottomBody)
      World.add(world, this.leftWallBody)
      World.add(world, this.rightWallBody);
    }
    display(){
    var posBottom=this.bottomBody.position;
    push()
    translate(posBottom.x, posBottom.y+10);
    fill(255)
    imageMode(CENTER);
    image(this.image, 0,0,this.width, this.height)
    pop()
    }
  }