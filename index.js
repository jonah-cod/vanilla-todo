const tasks = [
      { id: 14, title: "clean", isComplete: true },
      { id: 15, title: "Wash", isComplete: false },
      { id: 16, title: "code", isComplete: false },
      { id: 17, title: "brush teeth", isComplete: false }
]

let container = document.getElementById("tasks_container")



//appending the initial tasks to the dom
function mounttasks() {
      for (let index = 0; index < tasks.length; index++) {
            addTaskToDom(tasks[index], index)
      }

}
mounttasks()

//selecting the input field
let addTask = document.getElementById("add_task")


let addButton = document.getElementById("btn");
//functionality to add a new task
addButton.addEventListener("click", () => {
      let task = { id: Date.now(), title: addTask.value, isComplete: false };
      tasks.push(task)
      addTaskToDom(task, tasks.length-1)
      console.log(task)
})


// adding new task
function addTaskToDom(task_new, index) {
      // create new div for task
      let task = document.createElement("div");
      // set the divs id
      task.id =index
      //adding classlists
      task_new.isComplete? task.classList.add("task", "complete"): task.classList.add("task");

      //craeting the span tag to hold the tasks title
      let task_span = document.createElement("span");
      task_span.innerText = task_new.title;
      //creating the delete task button
      let btn = document.createElement("button");
      btn.id = task_new.id
      btn.innerText = "X";
      btn.classList.add("btn", "delete")

      //adding event listener to newly created task
      btn.addEventListener("click", ()=>deleteTask(task_new.id))
      task.appendChild(task_span);
      task.appendChild(btn)
      container.appendChild(task);
}



function deleteTask(id) {
      //functionality to delete a todo
      let buttonParent = document.getElementById(id).parentNode;
      container.removeChild(buttonParent)
}