import { getTasks, deleteTasks, taskComplete } from "./dataaccess.js"
import { TaskSubmission } from "./tasksForm.js"



export const Tasks = () => {
    const tasks = getTasks()
    const sortTasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date))
    let html = `<ul> `
    const converttaskToListElement = (task) => {
        if  (task.complete === false) {
        return `
        <ul class="tasks"> 
         <li>On: ${task.date}<br>
         Description: ${task.taskDescription}<br>
         <input type="checkbox" id="tasks--${task.id}"> DONE!
     </input> </ul>`
     
     }
    }

        html+= sortTasks.map(converttaskToListElement).join("")
        html+= `</ul>`
        
        return html
}
      
    

export const finishedTasks = () => {
    const tasks = getTasks()
    let html = `<ul> `
    const convertFinishedTaskToListElement = (task) => {
        if (task.complete === true) {                    
        return `
        <li class="tasks">    
        Description: ${task.taskDescription}<br>
        Checked Off the List!
        </li>` 
        }
    }
    html+= tasks.map(convertFinishedTaskToListElement ).join("")
    html+= `</ul>`

    return html
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

