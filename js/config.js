const referenceSize = (document.documentElement.clientWidth > document.documentElement.clientHeight ? 
                      document.documentElement.clientHeight : document.documentElement.clientWidth) - 50;
                      
const BLOCKSPERLINE = 20;

const BLOCK_SIZE = Math.floor(referenceSize/BLOCKSPERLINE);
const FPS = 5;
const VELOCITY = 1;
const BLOCKS_PER_ROW = 10;
const BLOCKS_PER_COLUMN = 10;
const CANVAS_SIZE = BLOCK_SIZE*BLOCKSPERLINE;
console.log(CANVAS_SIZE);
const canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;