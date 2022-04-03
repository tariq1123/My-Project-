//DOM UI VARIABLE
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection"); //ul element
const clearTask = document.querySelector(".clear-task");
const filterInput =document.querySelector("#filter");

//Event Listeners
taskForm.addEventListener("submit", taskFormFunction);
clearTask.addEventListener("click", clearTaskHandler);
filterInput.addEventListener("keyup", filterHandler);
document.addEventListener("DOMContentLoaded", getTaskFormLocalStorage);

//Event listeners functions

function taskFormFunction(event) {
    event.preventDefault();
    if(taskInput.value == "") {
        alert("task input fields is required");
        return;
    }
    collection.innerHTML += `<li class="collection-item">${taskInput.value}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`;
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = "";
    bindAllDeleteBtns();

    // const taskValue = taskInput.value;

    // const li = document.creatElement("li");
    // li.className = "collection-item";
    // <li class="collection-item"></li>

    //li.innerText = taskValue;
    // <li class="collection-item">taskValue</li>
    // const link = document.createElement("a");
    // link.className = "delete-item secondary-content";
    // <a class="delete-item secondary-content"></a>

    // const icon = document.createElement("i");
    // const.className = "fa fa-remove";
    // <i class="fa fa-remove"></i>

    // link.append(icon);

    // <a class="delete-item secondary-content">
    //   <i class="fa fa-remove"></i>
    // </a>;

    // li.append(link);
/*
    <li class="collection-item">
        taskValue
        <a class="delete-item secondary-content">
            <i class="fa fa-remove"></i>
        </a>
    </li> */

    // collection.append(li);
/*
    <ul class="collection">
        <li class="colection-item">
            taskValue
            <a class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
            </a>
        </li>
    </ul>
    */


    //   console.log(li, "li");
}   

function clearTaskHandler(event) {
    event.preventDefault();
    if (confirm("Are You Sure?")) {
        collection.innerHTML = "";
        localStorage.removeItem("task");
    }
}

function filterHandler(event) {
    event.preventDefault();
    const currentElement = event.target;
    const filerValue = currentElement.value.toLowerCase();
    const collectionItems = document.querySelectorAll(".collection-item");
    if (collectionItems.length > 0) {
        collectionItems.forEach(function (singleItem, index) {
            const taskValue = singleItem.innerText.toLowerCase();
            if (taskValue.indexof(filterValue) == -1) {
                singleItem.style.display = "none";
            } else {
                singleItem.style.display ="block";
            }
         });
    }   
}

function storeTaskInLocalStorage(taskFormValue) {
    let task = [];
    if(localStorage.getItem("tasks") != null) {
        task = JSON.parse(localStorage.getItem("task"));
    }

    console.log("updated array of task", [...task]);
    task.push(taskInputValue);

    localStorage.setItem("tasks", JSON.stringify(...tasks));
}

function getTaskFormLocalStorage() {
    let task = [];
    if (localStorage.getItem("tasks") != null) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    if (tasks.length > 0) {
        tasks.forEach(function (singleItem, index) {
            collection.innerHTML += `<li class="collection-item">${singleItem}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`;
        });
    }
    bindAllDeleteBtns();
}

function bindAllDeleteBtns() {
    const allLink = document.querySelectorAll(".delete-item");
    if (allLink.length > 0) {
        allLink.forEach(function (singleItem, index) {
            singleItem.addEventListener("click", function (event) {
                event.preventDefault();
                const currentElement =  event.target;
                if (confirm("Are You sure ?")) {
                    const liElement = currentElement.parentElement.parentElement;
                    removeTaskFromLocalStorage(liElement.innerText);
                    liElement.remove();
                }
            });
        });
    }
}

function removeTaskFromLocalStorage(findTaskValue) {
    let tasks = [];
    if (localStorage.getItem("tasks") != null) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  
    if (tasks.length > 0) {
      tasks.forEach(function (singleItem, index) {
        if (singleItem == findTaskValue) {
          tasks.splice(index, 1);
        }
      });
    }
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  