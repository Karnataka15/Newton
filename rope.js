class Rope 
{
    constructor(body1, point1)
    {
        var options = {stiffness : 0.5, bodyA : body1, pointA : point1, length : 100};

        this.pointA = point1;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display()
    {
        var bodyA = this.rope.bodyA.position;
        var pointA = this.pointA;

        line(bodyA.x, bodyA.y, pointA.x, pointA.y);
    }
}