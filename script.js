let ballX;
let ballY;
let obstacleX;
let obstacleY;
let score = 0;
let gameOver = false; 

// declares variables


function setup() {
    createCanvas(400, 400); // creates canvas
    startGame();
}


function startGame() {
    ballX = width / 2;
    ballY = height / 2; // creates ball
    obstacleX = random(width); // creates obstacle at a random location on the x-axis
    obstacleY = 0; // sets the obstaacle to have  y-coordinate of zero
    score = 0; //sets the score initially at zero
    gameOver = false; //makes it so the game pauses when you hit an obstacle
    loop();
}

function draw() {
    background(220); //changes the background color to light grey
    
    // Ball
    fill(150); //makes the ball colour to dark grey
    ellipse(ballX, ballY, 30, 30); //the width and height of the ball
    
    // Obstacle
    fill(255, 0, 0); //makes the obstacle red
    rect(obstacleX, obstacleY, 50, 50) //sets the width and height of the obstacle 
    obstacleY += 5; //makes the obstacle incremently increase by 5
    
    if (obstacleY > height) { //if the obstacle exceeds the height of the canvas it restarts to the top of the canvas
        obstacleY = 0;
        obstacleX = random(width); //randomly goes to any point on the x-axis upon restart
        score++; //the score will increase by 1
    }
    
    
    // Check collision
    if (dist(ballX, ballY, obstacleX + 25, obstacleY + 25) < 40) { //checks if the ball is less than 40 from the obstacle
        gameOver = true; //pauses the game when the ball hits the obstacle
        noLoop(); //Makes the game not loop
    }
    
    // Score
    fill(0);
    textSize(16);
    text("Score: " + score, 10, 30); 
    
    if (!gameOver) {
        // Control the ball
        if (keyIsDown(LEFT_ARROW)) { //if you click the left arrow the ball moves left
            ballX -= 4;
        } else if (keyIsDown(RIGHT_ARROW)) { //if you click the right arrow the ball moves right
            ballX += 4;
        }

        if (keyIsDown(UP_ARROW)) { //if you click the up arrow the ball moves up
            ballY -= 4;
        } else if (keyIsDown(DOWN_ARROW)) { //if you click the down arrow the ball moves down
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
