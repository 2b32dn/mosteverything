// This section contains some game constants. It is not super interesting
var GAME_WIDTH = 966;
var GAME_HEIGHT = 500;

var ENEMY_WIDTH = 138;
var ENEMY_HEIGHT = 95;
var MAX_ENEMIES = 5;

var PLAYER_WIDTH = 138;
var PLAYER_HEIGHT = 75;

// These two constants keep us from using "magic numbers" in our code
const LEFT_ARROW_CODE = 37;
const RIGHT_ARROW_CODE = 39;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';

// Preload game images
var images = {};
['pheonix.png', 'sc.png', 'marine.png'].forEach(imgName => {
    var img = document.createElement('img');
    img.src = 'images/' + imgName;
    images[imgName] = img;
});


// This section is where you will be doing most of your coding
class Enemy {
    constructor(xPos) {
        this.x = xPos;
        this.y = -ENEMY_HEIGHT;
        this.sprite = images['pheonix.png'];

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.30;
    }
    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}


class Player {
    constructor() {
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.sprite = images['marine.png'];
    }
    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        else if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
    }
    render(ctx) {
        ctx.drawImage(this.sprite, this.x+23, this.y);
    }
}

/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        // Setup enemies, making sure there are always three
        this.setupEnemies();

        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        var canvasId = document.createAttribute('id')
        canvasId.value = 'canvasid';
        canvas.setAttributeNode(canvasId);
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        element.appendChild(canvas);

        this.timeCounter = 0
        this.soundOn = false

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
     The game allows for 5 horizontal slots where an enemy can be present.
     At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
     */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }
        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = Math.floor(GAME_WIDTH / ENEMY_WIDTH); 
        var enemySpot;

        // Keep looping until we find a free enemy spot at random
        while (enemySpot === undefined || this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }
        this.enemies[enemySpot] = new Enemy((enemySpot) * ENEMY_WIDTH); 
    }

    // This method kicks off the game
    start() {
        this.score = 0;
        this.lastFrame = Date.now();

        // Listen for keyboard left/right and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                this.player.move(MOVE_LEFT);
                var x = Math.floor(Math.random()*8);
                switch(x){
                    case 0:
                        var letsmove = new Audio('letsmove.mp3');
                        if(this.timeCounter > 75){
                            letsmove.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 1:
                        var areyougonnagivemeorders = new Audio('areyougonnagivemeorders.mp3');
                        if(this.timeCounter > 75){
                            areyougonnagivemeorders.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 2:
                        var rocknroll = new Audio('rocknroll.mp3');
                        if(this.timeCounter > 75){
                            rocknroll.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 3:
                        var jackedupandgoodtogo = new Audio('jackedupandgoodtogo.mp3');
                        if(this.timeCounter > 75){
                            jackedupandgoodtogo.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 4:
                        var omgheiswhacked = new Audio('omgheiswhacked.mp3');
                        if(this.timeCounter > 75){
                            omgheiswhacked.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 5:
                        var wegottomove = new Audio('wegottomove.mp3');
                        if(this.timeCounter > 75){
                            wegottomove.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 6:
                        var gogogo = new Audio('gogogo.mp3');
                        if(this.timeCounter > 75){
                            gogogo.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 7:
                        var youwantapieceofmeboy = new Audio('youwantapieceofmeboy.mp3');
                        if(this.timeCounter > 75){
                            youwantapieceofmeboy.play();
                            this.timeCounter = 0
                        }
                        break;
                }
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                this.player.move(MOVE_RIGHT);
                var x = Math.floor(Math.random()*8);
                switch(x){
                    case 0:
                        var letsmove = new Audio('letsmove.mp3');
                        if(this.timeCounter > 75){
                            letsmove.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 1:
                        var areyougonnagivemeorders = new Audio('areyougonnagivemeorders.mp3');
                        if(this.timeCounter > 75){
                            areyougonnagivemeorders.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 2:
                        var rocknroll = new Audio('rocknroll.mp3');
                        if(this.timeCounter > 75){
                            rocknroll.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 3:
                        var jackedupandgoodtogo = new Audio('jackedupandgoodtogo.mp3');
                        if(this.timeCounter > 75){
                            jackedupandgoodtogo.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 4:
                        var omgheiswhacked = new Audio('omgheiswhacked.mp3');
                        if(this.timeCounter > 75){
                            omgheiswhacked.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 5:
                        var wegottomove = new Audio('wegottomove.mp3');
                        if(this.timeCounter > 75){
                            wegottomove.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 6:
                        var gogogo = new Audio('gogogo.mp3');
                        if(this.timeCounter > 75){
                            gogogo.play();
                            this.timeCounter = 0
                        }
                        break;
                    case 7:
                        var youwantapieceofmeboy = new Audio('youwantapieceofmeboy.mp3');
                        if(this.timeCounter > 75){
                            youwantapieceofmeboy.play();
                            this.timeCounter = 0
                        }
                        break;
                }
            }
        });
        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill

    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
     */
    gameLoop() {
        this.timeCounter++
        // Check how long it's been since last frame
        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;

        // Call update on all enemies
        this.enemies.forEach(enemy => enemy.update(timeDiff));

        // Draw everything!
        this.ctx.drawImage(images['sc.png'], 0, 0); // draw the star bg
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.player.render(this.ctx); // draw the player

        // Check if any enemies should die
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.setupEnemies();

        // Check if player is dead
        if (this.isPlayerDead() === true) {
            
            //. Play death sound.
            var death1 = new Audio('death1.mp3');
            death1.play();

            // If they are dead, then it's game over!
            this.ctx.font = '30px Times New Roman';
            this.ctx.fillStyle = '#F1C40F';
            this.ctx.fillText(this.score + ' Score Points. Protoss Win.', 10, 50);



        }
        else {
            // If player is not dead, then draw the score
            this.ctx.font = '30px Times New Roman';
            this.ctx.fillStyle = '#F1C40F';
            this.ctx.fillText(this.score, 10, 50);

            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }
    }

    isPlayerDead(){
        // TODO: fix this function!
        console.log(this.enemies);
        console.log(this.player);
        return(this.enemies.some((element,index)=>{
            return (this.player.x === element.x &&
                this.player.y + 73 > element.y  &&
                this.player.y - 73 < element.y )
            })
        )   
    }
}





// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();