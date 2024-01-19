let input = document.querySelector(".input")
let submit = document.querySelector(".add")
let tasksDiv = document.querySelector(".tasks")

let arrayOfTasks = [];

if (window.localStorage.getItem("tasks")){
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
}

getDataFromLocalStorage()

submit.onclick = function () {
    if(input.value !== ""){
        addTaskToArray(input.value)

        input.value = ""
    }
} 
    tasksDiv.addEventListener("click", (e) => {
        if (e.target.classList.contains("del")){
            deleteTaskWith(e.target.parentElement.getAttribute("date-id"))

            e.target.parentElement.remove()

        }
        if (e.target.classList.contains("task")){

            toggleStatusTaskWith(e.target.getAttribute("date-id"))

            e.target.classList.toggle("done")
        }
    })
function addTaskToArray(taskText){
    const task = {
        id : Date.now(),
        title:taskText,
        completed: false,
    }

    arrayOfTasks.push(task)

    addElementsToPageFrom(arrayOfTasks)

    addDataToLocalStorageFrom(arrayOfTasks)
}

function addElementsToPageFrom(arrayOfTasks){

    tasksDiv.innerHTML = ""

    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div")
        div.className = "task";
        if(task.completed){
            div.className = "task done"
        }
        div.setAttribute("date-id",task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span")
        span.className = "del"
        span.appendChild(document.createTextNode("Delete"))
        div.appendChild(span)
        tasksDiv.appendChild(div)
    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks ) )
}
function getDataFromLocalStorage() {
    if (window.localStorage.getItem("tasks")) {
        let tasks = JSON.parse(window.localStorage.getItem("tasks"))
        addElementsToPageFrom(tasks)
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId)

    addDataToLocalStorageFrom(arrayOfTasks)
}
function toggleStatusTaskWith(taskId){
    for(let i = 0; i < arrayOfTasks.length; i++){
        if (arrayOfTasks[i].id == taskId){
            arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed = false  
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks)
}