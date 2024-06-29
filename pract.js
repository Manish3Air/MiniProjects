function filterEvenNumbers() {
    const input = document.getElementById('arrayInput').value;
    let result = document.getElementById('result');

    let numbers = input.split(',').map(Number);

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    let ans = evenNumbers.join(', ');

    result.innerHTML = "[" + ans + "]";
}
