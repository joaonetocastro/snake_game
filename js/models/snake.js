const Snake = class{
    constructor(){
        this.tail = [{x: 0, y: 0}];
        this._direction = "right";
        this._lastDirection = "right";
    }
    get head(){
        return this.tail[0];
    }
    set direction(newDirection){
        if(this.tail.length > 1){
            if(this._lastDirection == "right" && newDirection == "left"
                || this._lastDirection == "left" && newDirection == "right") return;
            if(this._lastDirection == "up" && newDirection == "down"
                || this._lastDirection == "down" && newDirection == "up") return;
        }
        this._direction = newDirection;
    }
    walk(){
        this._lastDirection = this._direction;
        for(let index = this.tail.length-1; index > 0; index--){
            this.tail[index].x = this.tail[index-1].x;
            this.tail[index].y = this.tail[index-1].y;
        }
        switch(this._direction){
            case "up":
                this.head.y = this.head.y - BLOCK_SIZE;
            break;
            case "right":
                this.head.x = this.head.x + BLOCK_SIZE;
                break;
            case "down":
                this.head.y = this.head.y + BLOCK_SIZE;
            break;
            case "left":
                this.head.x = this.head.x - BLOCK_SIZE;
                break;
            default: break;
        }
    }
    draw(context){
        for(const block of this.tail){
            if(block == this.head){
                context.fillStyle = "#333"; 
                context.fillRect(block.x, block.y, BLOCK_SIZE, BLOCK_SIZE);
            }else{
                context.fillStyle = "#444"; 
                context.fillRect(block.x, block.y, BLOCK_SIZE, BLOCK_SIZE);
            }
        }     
    }
}