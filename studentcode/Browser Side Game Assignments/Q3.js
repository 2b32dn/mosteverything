var win = false;
var button = document.createElement('button');

// Creates a button on the screen after 1-3 seconds.
function randBtn(){
    var btnid = document.createAttribute('id');
    btnid.value = 'button';
    button.setAttributeNode(btnid);
    button.innerHTML = "Press Here!";
    div.appendChild(button);

    // Button Randomiser.
    button.style.position = 'absolute';
    var pixelTop = Math.random()*80;
    var pixelLeft = Math.random()*80;
    button.style.top = pixelTop+'vh';
    button.style.left = pixelLeft+'vw';

    // Set new timer.
    setTimeout(()=>win = true,1500);

    // Click to win.
    button.addEventListener('click',
    function click2win(){ 
        if(!win){
            alert("You pressed the button and you won!");
            win = true;
        }
    });    
    div.appendChild(button);
}

// Death trap.
document.getElementById("body");
document.addEventListener('click',
function deathTrap(){
    if(win === false)alert("You lost!");
    win = true;
});

// Game start timer
setTimeout(randBtn, Math.floor(Math.random()*(2000)+1000));


