function calculateArea() {
    let a = parseInt(document.getElementById("sideA").value);
    let b = parseInt(document.getElementById("sideB").value);
    let c = parseInt(document.getElementById("sideC").value);

    let semiPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

    if (a + b > c && a + c > b && b + c > a) {
        document.getElementById("result").textContent = area.toFixed(2);
    } else {
        document.getElementById("result").textContent = "Invalid triangle. Please enter valid side lengths."
    }
};