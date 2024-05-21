const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""

}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function positive_or_negative(){
    let currentValue = parseFloat(display.value)
    if(!isNaN(currentValue)){
        display.value = currentValue * (-1);
    }
}


