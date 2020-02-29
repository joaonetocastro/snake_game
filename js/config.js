const BLOCK_SIZE = 20;
const FPS = 5;
const VELOCITY = 1;
const BLOCKS_PER_ROW = 20;
const BLOCKS_PER_COLUMN = 20;
const CANVAS_SIZE = BLOCK_SIZE*BLOCKS_PER_ROW;

const canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;