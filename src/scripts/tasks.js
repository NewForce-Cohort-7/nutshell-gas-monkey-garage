import { getTasks, deleteTasks } from "./dataaccess.js"
import { TaskSubmission } from "./tasksForm.js"


const convertBookingToListElement = (task) => {

   return `
<li class="tasks">
    On: ${task.date}<br>
    Description: ${task.taskDescription}  <br>
    <button class="task__delete"
    id="tasks--${task.id}">
Delete
</button> </li>`

}

export const Tasks = () => {
    const tasks = getTasks()
    const sortTasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date))

    let html = `
    <ul class="taskToDo">
       
            ${
              sortTasks.map(convertBookingToListElement).join("")
            }
        </ul>
      
    `

    return html
}


const mainContainer = document.querySelector("#dashboard")
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("tasks--")) {
        const [,taskId] = click.target.id.split("--")
        deleteTasks(parseInt(taskId))
    }})
  
export const openTask = ()  => {
    return `<button id = "newTaskButton">New Task </button>`
}
mainContainer.addEventListener("click", click => {
    if (click.target.id === "newTaskButton") {
        mainContainer.innerHTML += TaskSubmission()
    }
    
})