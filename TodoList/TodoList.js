document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        span.textContent = taskInput;
        button.textContent = "Remove";
        listItem.appendChild(span);
        listItem.appendChild(button);
        document.getElementById('tasksList').appendChild(listItem);
        document.getElementById('taskInput').value = '';
        button.addEventListener('click', () => removeTask(listItem));
    }
});

function removeTask(element) {
    const listItem = element.parentNode;
    document.getElementById('tasksList').removeChild(listItem);
}