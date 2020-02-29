class Position{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class RandomPosition extends Position{
    constructor(){
        super(Math.floor(
            Math.random()*(BLOCKS_PER_ROW-1)) * BLOCK_SIZE,
            Math.floor(Math.random()*(BLOCKS_PER_COLUMN-1)) * BLOCK_SIZE
        );
    }
};