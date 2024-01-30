let ballX;
let ballY;
let obstacleX;
let obstacleY;
let score = 0;
let gameOver = false;

function setup() {
    createCanvas(400, 400);
    startGame();
}

function startGame() {
    ballX = width / 2;
    ballY = height / 2;
    obstacleX = random(width);
    obstacleY = 0;
    score = 0;
    gameOver = false;
    loop();
}

function draw() {
    background(220);
    
    // Ball
    fill(150);
    ellipse(ballX, ballY, 30, 30);
    
    // Obstacle
    fill(255, 0, 0);
    rect(obstacleX, obstacleY, 50, 50);
    obstacleY += 5;
    
    if (obstacleY > height) {
        obstacleY = 0;
        obstacleX = random(width);
        score++;
    }
    
    
    // Check collision
    if (dist(ballX, ballY, obstacleX + 25, obstacleY + 25) < 40) {
        gameOver = true;
        noLoop();
    }
    
    // Score
    fill(0);
    textSize(16);
    text("Score: " + score, 10, 30);
    
    if (!gameOver) {
        // Control the ball
        if (keyIsDown(LEFT_ARROW)) {
            ballX -= 4;
        } else if (keyIsDown(RIGHT_ARROW)) {
            ballX += 4;
        }

        if (keyIsDown(UP_ARROW)) {
            ballY -= 4;
        } else if (keyIsDown(DOWN_ARROW)) {
            ballY += 4;
        }
    }
}

function keyPressed() {
    // Restart the game when spacebar is pressed
    if (gameOver && key === ' ') {
        startGame();
    }
}
