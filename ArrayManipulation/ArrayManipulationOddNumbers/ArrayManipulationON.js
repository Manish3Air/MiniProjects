function filterOddNumbers() {
    const input = document.getElementById('arrayInput').value;
    const result = document.getElementById('result');
    const numbers = input.split(',').map(Number);
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    result.innerHTML = "[" + evenNumbers.join(", ") + "]";
}
