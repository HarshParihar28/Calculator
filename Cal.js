const display = document.querySelector(".display");

function displayNum(value) {
    display.value += value;
}

function displayClear() {
    display.value = '';
}


function oneNumClear(){
    const numbers = document.querySelector(".display");
    numbers.value = numbers.value.slice(0,-1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}