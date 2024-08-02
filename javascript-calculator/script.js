let buffer = '0';
let screen = document.querySelector('.screen');

let previousOperator;
let result = 0;

function backspace(){
    if(buffer.length === 1)
        buffer = '0';
    else 
        buffer = buffer.substring(0,buffer.length-1);
}

function flushOperation(){
    switch(previousOperator){
        case '+':
            result += Number.parseInt(buffer);
            buffer = '0';
            break;
        case '-':
            result -= Number.parseInt(buffer);
            buffer = '0';
            break;
        case '×':
            result *= Number.parseInt(buffer);
            buffer = '0';
            break;
        case '÷':
            result /= Number.parseInt(buffer);
            buffer = '0';
            break;
    }
}

function doMaths(symbol){
    if(buffer === '0')
        return;

    if(result === 0){
        result = Number.parseInt(buffer);
        buffer = '0';
    }
    else{
        flushOperation();
    }

    previousOperator = symbol;
}

function symbolHandler(value){
    switch(value){
        case 'C':
            buffer = '0';
            result = 0;
            previousOperator = '';
            break;
        case '←':
            backspace();
            break;
        case '÷':
        case '×':
        case '-':
        case '+':
            doMaths(value);    
            break;
        case '=':
            if(result === 0){
                // do nothing
                return;
            }
            
            flushOperation();

            buffer = result.toString();
            break;

    }
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