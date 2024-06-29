function reverseArray() {
    const input = document.getElementById('arrayInput').value;
    const result = document.getElementById('result');
    const numbers = input.split(',').map(Number);
    let evenNumbers = [];
    for (let i = numbers.length-1; i >=0 ; i--) {
            evenNumbers.push(numbers[i]);
    }
    result.innerHTML = "[" + evenNumbers.join(", ") + "]";
}
