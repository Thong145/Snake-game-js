let snake;
// let food;
var SNAKE_SPEED =10;
// const frameCount =0;

function setup() {
   createCanvas(WIDTH, HEIGHT);
   newGame();
}

function draw() {
   background(0);
   if(!snake.isDead){
      drawSnake();
   } else {
      newGame()
   }
}

function drawSnake() {
   if(frameCount % SNAKE_SPEED == 0)
   {
      snake.update();
   }
   snake.show();
   food.show(); 
   
   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood();
   }
}

function eatFood() {
   snake.length++;
   food.newFood();
}

function newGame() {
   snake = new Snake();
   food = new Food();
}

function keyPressed() {
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1;
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1;
   }
}


// var canvas, ctx;

// window.onload = function() {
//    canvas = document.getElementById("canvas");
//    ctx = canvas.getContext("2d");
//    document.addEventListener("keydown", keyDownEvent);

//    var x = 8;
//    setInterval(draw, 1000 / x);
// };

// function keyDownEvent(e) {
//    switch (e.keyCode) {
//    case 37:
//      nextX = -1;
//      nextY = 0;
//      break;
//    case 38:
//      nextX = 0;
//      nextY = -1;
//      break;
//    case 39:
//      nextX = 1;
//      nextY = 0;
//      break;
//    case 40:
//      nextX = 0;
//      nextY = 1;
//      break;
//    }
// }
 
// var defaultTailSize = 3;
// var tailSize = defaultTailSize;
// var snakeTrail = [];
// var snakeX = snakeY = 10;

// var gridSize = tileSize = 20; // 20 x 20 = 400
// var nextX = nextY = 0;
// var baitX = (baitY = 15);
// snakeX += nextX;
// snakeY += nextY;
// if (snakeX < 0) {
//    snakeX = gridSize - 1;
//  }
// if (snakeX > gridSize - 1) {
//    snakeX = 0;
// }
// if (snakeY < 0) {
//    snakeY = gridSize - 1;
// }
// if (snakeY > gridSize - 1) {
//    snakeY = 0;
// }

// if (snakeX == baitX && snakeY == baitY) {
//    tailSize++;
//    baitX = Math.floor(Math.random() * gridSize);
//    baitY = Math.floor(Math.random() * gridSize);
// }

// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = "green";
// for (var i = 0; i < snakeTrail.length; i++) {
//   ctx.fillRect(
//     snakeTrail[i].x * tileSize,
//     snakeTrail[i].y * tileSize,
//     tileSize,
//     tileSize
//   );
//   // kiểm tra xem con rắn có cắn nó không
//   if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
//     tailSize = defaultTailSize;
//   }
// }

// ctx.fillStyle = "red";
// ctx.fillRect(baitX * tileSize, baitY * tileSize, tileSize, tileSize);

