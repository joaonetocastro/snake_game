class Game{
    constructor(){
        this.running = true;
        this.fruit = new Fruit();
        this.atedFruits = 0;
        this.snake = new Snake();
    }
    score(){
        return this.atedFruits*20;
    }
    clearCanvas(){
        canvas.getContext("2d").clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    }
    endGame(){
        this.running = false;
    }
    verifyCollisions(){
        if(this.snake.head.x < 0 || this.snake.head.x >= canvas.width ||
            this.snake.head.y >= canvas.height || this.snake.head.y < 0){
            this.endGame();
            alert("COLLISION WITH THE WALL");
        }else{
            for(let index = 1; index < this.snake.tail.length; index++){
                const block = this.snake.tail[index];
                if(this.snake.head.y == block.y && this.snake.head.x == block.x){
                    this.endGame();
                    alert("SNAKE ATE ITSELF");
                    break;
                }
            }
            if(this.snake.head.x == this.fruit.x && this.snake.head.y == this.fruit.y){
                this.atedFruits = this.atedFruits + 1;
                console.log(`ATE FRUIT, SCORE ${this.score()}`);
                
                let position = {x: this.fruit.x, y: this.fruit.y};
                setTimeout(() => {
                    this.snake.tail.push(position);
                }, 1000/FPS*this.snake.tail.length);
                
                this.fruit = new Fruit();
            }
        }
    }
    updateScore(){
        const scoreEl = document.getElementById('score');
        scoreEl.innerHTML = `SCORE: ${this.score()}`;
    }
    renderNextFrame(){
        this.snake.walk();
        this.verifyCollisions();
        if(this.running){
            this.clearCanvas();
            this.fruit.draw(context);
            this.snake.draw(context);
            this.updateScore();
            setTimeout(() => {this.renderNextFrame();}, 1000/FPS);
        }
    }
}