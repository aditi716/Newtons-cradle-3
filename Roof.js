class Roof{
    constructor(x,y){
        var options ={
         isStatic:true
        }
        
        this.body = Bodies.rectangle(x,y,500,50,options);
        World.add(world,this.body);
    }
    display(){
     var posX = this.body.position.x;
      var posY = this.body.position.y;
      fill("white");
        rect(posX,posY,500,50);
    }
}