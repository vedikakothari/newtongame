class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
    this.bob= Bodies.circle(x,y,(radius)/2,options);
    this.radius = radius;
    World.add(world,this.bob);
    }

display(){
    var pos = this.bob.position;
    var angle = this.bob.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}