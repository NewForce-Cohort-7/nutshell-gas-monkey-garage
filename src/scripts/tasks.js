import { getTasks, deleteTasks, taskComplete } from "./dataaccess.js"
import { TaskSubmission } from "./tasksForm.js"


const converttaskToListElement = (task) => {

   return `
   <li class="tasks">    
    On: ${task.date}<br>
    Description: ${task.taskDescription}  <br>
    <input type="checkbox" id="tasks--${task.id}"> DONE!
</input> </li>`

}

export const Tasks = () => {
    const tasks = getTasks()
    const sortTasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date))
    if (sortTasks.complete === false){

    let html = `
    <ul class="taskToDo"><h2> To-Do List</h2>
       
            ${
              sortTasks.map(converttaskToListElement).join("")
            }
        </ul>
      
    `
        
    return html
        }
}

export const finishedTasks = () => {
    const tasks = getTasks()
    if (tasks.complete === true){
    let html = `
    <ul class="taskToDo"><h2> Finished </h2>
       
            ${
                tasks.map(converttaskToListElement).join("")
            } 
        </ul>
      
    `
        
    return html

}
    }

/*const mainContainer = document.querySelector("#dashboard")
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("tasks--")) {
        const [,taskId] = click.target.id.split("--")
        deleteTasks(parseInt(taskId))
    }})*/
 
const mainContainer = document.querySelector("#dashboard")    
mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("tasks--")) {
            const [,taskId] = click.target.id.split("--")
            taskComplete(parseInt(taskId))
        }
    })
       
export const openTask = ()  => {
    return `<button id = "newTaskButton">New Task </button>`
}
mainContainer.addEventListener("click", click => {
    if (click.target.id === "newTaskButton") {
        mainContainer.innerHTML += TaskSubmission()
    }
    
})

