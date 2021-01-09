class Bulb
{
    constructor(x, y, radius)
    {
        var options = {restitution : 0.5, density : 1};

        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position

        ellipse(pos.x, pos.y, this.radius);
        fill("pink");
    }
}