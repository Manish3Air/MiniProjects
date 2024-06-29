function filterEvenNumbers() {
    const input = document.getElementById('arrayInput').value;
    const result = document.getElementById('result');

    
    const numbers = input.split(',').map(Number);
    let evenNumbers = [];

    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    
    result.innerHTML = "[" + evenNumbers.join(", ") + "]";
}


// function filterEvenNumbers() {
//     const input = document.getElementById('arrayInput').value;
//     let result = document.getElementById('result');
//     let numbers = input.split(',').map(Number);
//     let evenNumbers = numbers.filter(num => num % 2 === 0);
//     let ans = evenNumbers.join(', ');
//     result.innerHTML = "[" + ans + "]";
// }
