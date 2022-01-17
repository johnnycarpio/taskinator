// Creating a variable for certain HTML IDs
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Creating a variable for a function that we will call repeatedly (this has to be before the event listener or it will result in an undefined error)
var createTaskHandler = function (event) {

    event.preventDefault();
    // Creating a variable for VALUE that is provided in the INPUT section under the (name="task-name")
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput)

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    console.dir(listItemEl);
}

// Every time the anything on #task-form is submitted, createTaskHandler function will run
formEl.addEventListener("submit", createTaskHandler);