function sumArray() {
    const input = document.getElementById('arrayInput').value;
    const result = document.getElementById('result');
    const numbers = input.split(',').map(Number);
	let sum  = 0;
	for (let i = 0; i < numbers.length; i++) {
	sum+=numbers[i];   
	} 
    result.innerHTML = "Sum: " + sum;
}
