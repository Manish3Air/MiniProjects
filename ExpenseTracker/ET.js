
    function addExpense() {
        
        const expenseName = document.getElementById('expenseName').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
    
        
        if (expenseName === '' || amount === '' || date === '') {
            alert('Please fill in all fields');
            return;
        }
    
        
        const expense = {
            id: Date.now(),
            name: expenseName,
            amount: parseFloat(amount),
            date: date
        };
    
        
        let expenses = localStorage.getItem('expenses');
        if (expenses) {
            expenses = JSON.parse(expenses);
        } else {
            expenses = [];
        }
    
        
        expenses.push(expense);
    
        
        localStorage.setItem('expenses', JSON.stringify(expenses));
    
        
        document.getElementById('expenseName').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').value = '';
    
        alert('Expense added successfully');
    }
    
