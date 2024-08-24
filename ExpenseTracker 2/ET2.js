// Function to add an expense to localStorage
function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    // Validate inputs
    if (expenseName === '' || amount === '' || date === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create an expense object
    const expense = {
        id: Date.now(),
        name: expenseName,
        amount: parseFloat(amount),
        date: date
    };

    // Retrieve existing expenses from localStorage
    let expenses = localStorage.getItem('expenses');
    if (expenses) {
        expenses = JSON.parse(expenses);
    } else {
        expenses = [];
    }

    // Add the new expense to the array
    expenses.push(expense);

    // Save the updated array back to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Clear the input fields
    document.getElementById('expenseName').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';

    alert("Expense added Successfully");

    // Display updated expenses
    displayExpenses();
}

// Function to display expenses from localStorage
function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';  // Clear the existing list
    let totalAmount = 0;  // To calculate total expenses

    // Retrieve expenses from localStorage
    let expenses = localStorage.getItem('expenses');
    if (expenses) {
        expenses = JSON.parse(expenses);

        // Loop through the expenses and create a list item for each one
        expenses.forEach(expense => {
            const template = document.getElementById('expenseTemplate').content.cloneNode(true);
            template.querySelector('.expense-name').textContent = expense.name;
            template.querySelector('.expense-amount').textContent = expense.amount.toFixed(2);
            template.querySelector('.expense-date').textContent = expense.date;

            // Add expense ID to the remove button for identification
            template.querySelector('button').setAttribute('data-id', expense.id);

            // Append to the expense list
            expenseList.appendChild(template);

            // Update total amount
            totalAmount += expense.amount;
        });
    }

    // Update the total amount displayed
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

// Function to remove an expense
function removeExpense(event) {
    const expenseId = event.target.getAttribute('data-id');

    // Retrieve existing expenses from localStorage
    let expenses = localStorage.getItem('expenses');
    if (expenses) {
        expenses = JSON.parse(expenses);

        // Filter out the expense with the matching ID
        expenses = expenses.filter(expense => expense.id != expenseId);

        // Save the updated array back to localStorage
        localStorage.setItem('expenses', JSON.stringify(expenses));

        // Display updated expenses
        displayExpenses();
    }
}

// Initial call to display expenses when the page loads
window.onload = displayExpenses;
