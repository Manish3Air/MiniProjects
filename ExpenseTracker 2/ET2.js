// // Function to add an expense to localStorage
// function addExpense() {
//     const expenseName = document.getElementById('expenseName').value;
//     const amount = document.getElementById('amount').value;
//     const date = document.getElementById('date').value;

//     // Validate inputs
//     if (expenseName === '' || amount === '' || date === '') {
//         alert('Please fill in all fields');
//         return;
//     }

//     // Create an expense object
//     const expense = {
//         id: Date.now(),
//         name: expenseName,
//         amount: parseFloat(amount),
//         date: date
//     };

//     // Retrieve existing expenses from localStorage
//     let expenses = localStorage.getItem('expenses');
//     if (expenses) {
//         expenses = JSON.parse(expenses);
//     } else {
//         expenses = [];
//     }

//     // Add the new expense to the array
//     expenses.push(expense);

//     // Save the updated array back to localStorage
//     localStorage.setItem('expenses', JSON.stringify(expenses));

//     // Clear the input fields
//     document.getElementById('expenseName').value = '';
//     document.getElementById('amount').value = '';
//     document.getElementById('date').value = '';

//     alert("Expense added Successfully");

//     // Display updated expenses
//     displayExpenses();
// }

// // Function to display expenses from localStorage
// function displayExpenses() {
//     const expenseList = document.getElementById('expenseList');
//     expenseList.innerHTML = '';  // Clear the existing list
//     let totalAmount = 0;  // To calculate total expenses

//     // Retrieve expenses from localStorage
//     let expenses = localStorage.getItem('expenses');
//     if (expenses) {
//         expenses = JSON.parse(expenses);

//         // Loop through the expenses and create a list item for each one
//         expenses.forEach(expense => {
//             const template = document.getElementById('expenseTemplate').content.cloneNode(true);
//             template.querySelector('.expense-name').textContent = expense.name;
//             template.querySelector('.expense-amount').textContent = expense.amount.toFixed(2);
//             template.querySelector('.expense-date').textContent = expense.date;

//             // Add expense ID to the remove button for identification
//             template.querySelector('button').setAttribute('data-id', expense.id);

//             // Append to the expense list
//             expenseList.appendChild(template);

//             // Update total amount
//             totalAmount += expense.amount;
//         });
//     }

//     // Update the total amount displayed
//     document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
// }

// // Function to remove an expense
// function removeExpense(event) {
//     const expenseId = event.target.getAttribute('data-id');

//     // Retrieve existing expenses from localStorage
//     let expenses = localStorage.getItem('expenses');
//     if (expenses) {
//         expenses = JSON.parse(expenses);

//         // Filter out the expense with the matching ID
//         expenses = expenses.filter(expense => expense.id != expenseId);

//         // Save the updated array back to localStorage
//         localStorage.setItem('expenses', JSON.stringify(expenses));

//         // Display updated expenses
//         displayExpenses();
//     }
// }

// // Initial call to display expenses when the page loads
// window.onload = displayExpenses;




// Get references to the input fields 
let expenseNameInput = document.getElementById("expenseName"); 
let expenseAmountInput = document.getElementById("amount"); 
let expenseDateInput = document.getElementById("date"); 
let expenseListUl = document.getElementById("expenseList"); 
let totalAmountSpan = document.getElementById("totalAmount");

function addExpense() {  
    // Retrieve existing expenses from localStorage or initialize an empty array  
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Create a new expense object 
    const expense = { id: Date.now(), 
        name: expenseNameInput.value, 
        amount: parseFloat(expenseAmountInput.value), 
        date: expenseDateInput.value, };

    // Add the new expense to the expenses array 
    expenses.push(expense);

    // Store the updated expenses array back into localStorage  
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Clear the input fields  
    expenseNameInput.value = ""; 
    expenseAmountInput.value = ""; 
    expenseDateInput.value = ""; 
    displayExpenses();
}

// Displaying the expense details here 
function displayExpenses() {  
    // Getting expenses  
    let expenses = JSON.parse(localStorage.getItem("expenses"));

    // Creating Li  
    let expenseLi = document.createElement("li");

    // Total  
    let total = expenses.reduce((acc, curr) => (acc += parseFloat(curr.amount)), 0);

    if (expenses.length > 0) {
        expenses.forEach((expense) => {
            expenseLi.id = expense.id;      
            // Adding li data      
            expenseLi.innerHTML = `<span class="expense-name"></span>${expense.name}
            <span class="expense-amount">${expense.amount}</span> ${expense.date}
            <span class="expense-date"></span>    
            <button onclick="removeExpense(event)">Remove</button>      `;
        });

        // Appending to the expenses ul list here    
        expenseListUl.append(expenseLi);
    }

    // Adding total  
    totalAmountSpan.textContent = parseFloat(total);
}

// Remove expense 
function removeExpense(event) {
    const button = event.target; 
    const li = button.closest("li"); 
    const expenseId = li.id;

    //   Removing from localstorage  
    let expenses = JSON.parse(localStorage.getItem("expenses")); 
    expenses = expenses.filter((e) => e.id != expenseId); 
    localStorage.setItem("expenses", JSON.stringify(expenses));  
    // Removing here  
    expenseListUl.removeChild(li);
} 
