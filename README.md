# Classic-arcade-game-master


# How to run the game

The main game logic is implemented in the app.js file. you can run the game by opening the index.html file in your browser or use the link below.

http://ponmalar.freeasphost.net/udacity%20project%203/index.html


# About the game implimentation

There are two classes used in this game. 
**Player class
**Enemy class

# The Player class

 player has fixed x and y coordinates. he is allowed to move left ,right, up and down in the canvas.

 Collision with enemy , update, render and win functions are used in the player prototype.
 When collision occurs the player is reset to his initial position.

 The player is not allowed to move out of the canvas.

 # The Enemy class 

 there are multiple enimies in the game. Each enmey has its own x , y coordinates and random speed.

 Update and render functions are used in the prototype od enmey class.

 # how to play

 1. use the arrow keys to move the player in the canvas.
 2. At the start of the game there are 4 lives, with each collision the player loses a life.
 3. when the player reaches the water surface 25 points are added to his score.





 
