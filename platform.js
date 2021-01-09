class Platform
{
    constructor(x, y, width, height)
    {
        var options = {isSiatic : true};

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    }

    display()
    {
        var pos = this.body.position;

        rect(pos.x, pos.y, this.width, this.height);
        fill("black");
    }
}