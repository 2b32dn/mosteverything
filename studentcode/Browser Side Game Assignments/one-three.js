var win = false;

var clickWin = document.querySelector("#body");
clickWin.addEventListener('click',
function(){ 
    alert("You clicked and you won!");
    win = true;
});

var clickSpacebar = document.querySelector("#body");
clickWin.addEventListener('keydown',
function(e){ 
    if (e.keycode !== 32) 
    return alert("You pressed on \"spacebar and you won!");
    win = true;
});

function oneTwoThree(){
    document.getElementById('body').innerHTML = "Press Now!";
    setTimeout(()=>{if(win === false) alert("You lost!")}, 500);
}

setTimeout(oneTwoThree,Math.floor(Math.random()*(2000)+1000));

