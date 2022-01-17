// Creating a variable for certain HTML IDs
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// Creating a variable for a function that we will call repeatedly (this has to be before the event listener or it will result in an undefined error)
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Every time the buttonEl is clicked, createTaskHandler function will run
buttonEl.addEventListener("click", createTaskHandler);