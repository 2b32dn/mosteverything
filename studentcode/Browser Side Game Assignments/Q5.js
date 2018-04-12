var win = false;
var button = document.createElement('button');

function startGame(){
    setTimeout(gameBegin, Math.floor(Math.random()*2000+1000))
}
function restart(){
    window.location.reload();
}

function gameBegin(){

    var message = document.getElementById('div');
    message.innerHTML = "CLICK FAST!"

    var potentialWin = document.getElementById('body');
    potentialWin.addEventListener('click',
        ()=>{
            if(!win)alert("You clicked and you won!");
            win = true;

            var restartid = document.createAttribute('onclick');
            restartid.value = 'restart()';
            button.setAttributeNode(restartid);
            button.innerHTML = "Restart Here.";
            div.appendChild(button);
        }
    );
    potentialWin.addEventListener('keydown',
        function e (){
            if (e.keycode !== 32 && !win){
            alert("You pressed on \"spacebar and you won!");
            win = true;

            var restartid = document.createAttribute('onclick');
            restartid.value = 'restart()';
            button.setAttributeNode(restartid);
            button.innerHTML = "Restart Here.";
            div.appendChild(button);
            }
        }
    );

    setTimeout(function youLoss(){
            if(win === false){
                alert("You lost!");
                win = true;
            }
        }
    ,1500);
}