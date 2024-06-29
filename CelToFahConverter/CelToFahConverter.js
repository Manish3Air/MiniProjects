let cel = document.getElementById("celsius");

function convertTemperature() {
    let res = (cel.value * 9 / 5) + 32;
    result.innerHTML = "Fahrenheit: " + res.toFixed(2);


}