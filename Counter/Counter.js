
const button = document.getElementById('reset');
button.addEventListener('click', Setto);
function Setto() {
    const display = document.getElementById('count');
    display.textContent = 0;
}



function Incby1() {
    const display = document.getElementById('count');
    let currentValue = parseInt(display.textContent, 10);
    currentValue += 1;
    display.textContent = currentValue;
}

function Decby1() {
    const display = document.getElementById('count');
    let currentValue = parseInt(display.textContent, 10);
    if (currentValue === 0) {
        display.textContent = 0;
    } else {
        currentValue -= 1;
        display.textContent = currentValue;
    }
}




