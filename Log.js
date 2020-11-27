class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width=20
      this.height = height;
      console.log("Log  angle " + angle)
      Matter .Body.setAngle(this.body,angle)      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      console.log("Body angle " + angle)
      push();
     translate(pos.x, pos.y);
    rotate(angle);
      strokeWeight(4);
      stroke("green")
     rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  