let buffer = '0';
let screen = document.querySelector('.screen');

function symbolHandler(value){
    console.log('symbol');
}

function numberHandler(value){
    if(buffer === '0'){
        buffer = value;
    } else {
        buffer += value;
    }
}


function reRender(){
    screen.innerText = buffer;
}

function buttonClick(value){
    if(isNaN(parseInt(value)))
        symbolHandler(value);
    else
        numberHandler(value);

    // everytime the button is clicked, run this function at the end.
    reRender();
}



// function to start everything by getting handler to buttons
// working like a main method
function init(){
    document.querySelector('.buttons')
    .addEventListener('click', function (event){
        buttonClick(event.target.innerText);
    });
}

init();