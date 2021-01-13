class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        push();
    var pointA = this.bodyA.position;
    var pointB = this.pointB;
    stroke("pink");
    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
    }
}
