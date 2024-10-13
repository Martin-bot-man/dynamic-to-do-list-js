document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');   


    // Retrieve tasks from Local Storage
    let tasks = loadTasksFromLocalStorage();

    // Populate the task list
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.classList.add('task-item');

        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.onclick   
 = function() {
            listItem.remove();
            removeTaskFromLocalStorage(task);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    });

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert("Enter a task");
            return;
        }

        // Add task to Local Storage
        tasks.push(taskText);
        saveTasksToLocalStorage(tasks);

        // Add task to the list
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.classList.add('task-item');

        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.onclick   
 = function() {
            listItem.remove();
            removeTaskFromLocalStorage(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    // Function to load tasks from Local Storage
    function loadTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem('tasks');   

        return storedTasks ? JSON.parse(storedTasks) : [];
    }

    // Function to save tasks to Local Storage
    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));   

    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(task)   
 {
        tasks = tasks.filter(t => t !== task);
        saveTasksToLocalStorage(tasks);
    }

    // Attach event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});