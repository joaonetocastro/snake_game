const Fruit = class{
    constructor(){
        const position = new RandomPosition();
        this.x = position.x;
        this.y = position.y;
    }
    draw(context){
        context.fillStyle = "#5b5"; 
        context.fillRect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE); 
    }
};