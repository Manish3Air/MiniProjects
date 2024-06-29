function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('result');
    try {
        
        display.value = eval(display.value);
    } catch (e) {
        
        display.value = 'Error';
    }
}