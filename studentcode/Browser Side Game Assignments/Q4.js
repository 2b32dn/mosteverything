var win = false;
var body = document.getElementById('id');

// Game start timer.
function gameStart(){ 
    setTimeout(afterBtn, Math.floor(Math.random()*2000+1000));
}

function afterBtn(){

    // Create a button to start the game.
    var message = document.getElementById('div');
    message.innerHTML = "CLICK FAST!";

    // Clicked to Win
    var potentialWin = document.getElementById('body');
    potentialWin.addEventListener('click',()=>{
            if(!win){
                alert("You clicked and you won!");
                win = true;
            }
        }
    );
    // Pressed space to win.
    potentialWin.addEventListener('keydown',
        function e (){
            if (e.keycode !== 32 && !win){
            alert("You pressed on \"spacebar and you won!");
            win = true;
            }
        }
    );

    setTimeout(
        function youLoss(){
            if(win === false){
                alert("You lost");
                win = true;
            }
        }
        ,1500
    );
}



