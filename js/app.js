// Enemies our player must avoid
class Enemy  {

    constructor(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.xAxis = x;
    this.yAxis = y;
    this.speed = speed;
    this.boundry = 501;

}

update(dt) {
    this.xAxis += this.speed * dt;
    // if X goes past the end of the board, reset the enemy
    if (this.xAxis >= this.boundry) {
        this.reset(); 
    }
}

reset() {
   this.xAxis = -200;
    this.yAxis = randomY();
    this.speed = randomSpeed(50, 200);
  }



// Draw the enemy on the screen, required method for game
 render() {
    ctx.drawImage(Resources.get(this.sprite), this.xAxis, this.yAxis);
}


};

function randomSpeed(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomY() {
    var yCoordinates = [60, 145, 230];
    var chooseCoordinate = yCoordinates[Math.floor(Math.random() * yCoordinates.length)];
    return chooseCoordinate;
};

//player class
class Player {

    constructor() {
        this.sprite = 'images/char-boy.png';
        this.xAxis = 200;
        this.yAxis = 400;

        this.lives = 4;//set initial number of lives availabe to player
        this.score = 0;//set initial score
        this.livesCount = document.getElementById('lives');
        this.livesCount.innerHTML = this.lives;//assigning lives to HTML

        this.scoreCount = document.getElementById('score');
        this.scoreCount.innerHTML = this.score;//Assiging the score to HTML element

    }

    render() {
    ctx.drawImage(Resources.get(this.sprite), this.xAxis, this.yAxis);
}
    collision() {
         for (i = 0; i < allEnemies.length; i++) {
        // Check enemy positions vs player positions
        // We are checking if the player is within 65px
        // of the left, right, top, and bottom of an enemy
        if (
            (this.xAxis - allEnemies[i].xAxis) < 65 &&
            (this.yAxis - allEnemies[i].yAxis) < 65 &&
            (allEnemies[i].xAxis - this.xAxis) < 65 &&
            (allEnemies[i].yAxis - this.yAxis) < 65)
               {
            this.lives = this.lives - 1;
            this.livesCount.innerHTML = this.lives;
            
            if (this.lives === 0) {
                alert(`Game Over. Your score is ${this.score}` );
                this.score = 0;
                this.scoreCount.innerHTML = this.score;
                this.lives = 4;
                this.livesCount.innerHTML = this.lives;
            
        }
                 this.reset();
             }
    }
}

    handleInput(key) {
            
            (key === 'up') ? this.yAxis -= 85 : (key === 'down') 
                           ? this.yAxis += 85 : (key === 'right') 
                           ? this.xAxis += 100 : (key === 'left') 
                           ? this.xAxis -= 100 : console.log("moved"); 
    }

    win() {

        if(this.yAxis === -25){
            
            this.score = this.score + 25;
            this.scoreCount.innerHTML = this.score;
            this.reset();
        }
        
        else if (this.yAxis > 400){

            this.yAxis = 400//Boundry check, if player crosses the boundry reset boundry to 400
        }
        else if (this.xAxis === -100){

            this.xAxis = 0;//boundry check for let side of the canvas
        }
        else if (this.xAxis === 500){

            this.xAxis = 400;//boundry check for right side, don't let the player move more than 400
        }

    }


    reset() {
        
        this.xAxis = 200;
        this.yAxis = 400;
    }


    update() {

        this.collision();
        this.win();
    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var i;

for(i = 0; i<6 ;i++) {

    allEnemies[i] = new Enemy(-200, randomY(), randomSpeed(50, 200));
}

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
