function filterPrimes() {
    const input = document.getElementById('arrayInput').value;
    const result = document.getElementById('result');
    const numbers = input.split(',').map(Number);
    let primeNumbers = [];

    function checkPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (checkPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }

    result.innerHTML = "[" + primeNumbers.join(", ") + "]";
}
