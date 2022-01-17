// Creating a variable for certain HTML IDs
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Creating a variable for a function that we will call repeatedly (this has to be before the event listener or it will result in an undefined error)
var createTaskHandler = function(event) {
// Default browser behaviour is to refresh the page any time something is submitted, this line makes sure we override that behaviour
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Every time the anything on #task-form is submitted, createTaskHandler function will run
formEl.addEventListener("submit", createTaskHandler);