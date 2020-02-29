$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            game.snake.direction = "left";
        break;
        case 38: // up
            game.snake.direction = "up";
        break;

        case 39: // right
            game.snake.direction = "right";
        break;

        case 40: // down
            game.snake.direction = "down";
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});