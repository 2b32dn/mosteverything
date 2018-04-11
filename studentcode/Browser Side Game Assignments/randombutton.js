var win = false;
var button = document.createElement('button');

// Button random position.




// Creates a button on the screen after 1-3 seconds.
function randBtn(){
    var btnid = document.createAttribute('id');
    btnid.value = 'button';
    button.setAttributeNode(btnid);
    button.innerHTML = "Press Here!";
    div.appendChild(button);

    // Press the button to win.
    button.addEventListener('click',
    function click2win(){ 
        if(!win){
            alert("You pressed the button and you won!");
            win = true;
        } 
        else {
            setTimeout( function killSwitch(){
                win = true; 
                button.preventDefault()},
                1500
            );
        }
    });    
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


