class Paper{
    constructor(x,y,radius){
        var option={
           isStatic:false,
           restitution:0.3, 
           density:1.2,
           friction:0.5
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70); 
}
}