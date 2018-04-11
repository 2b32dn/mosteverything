setTimeout(()=> alert("You lost!"), 1000);

var reflex = document.querySelector('#reflex');
reflex.addEventListener('click',
    function(){ 
        alert("You won!");
    }); 
