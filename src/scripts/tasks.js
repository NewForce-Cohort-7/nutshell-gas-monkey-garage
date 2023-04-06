
//by kathleen tyner. Allows the user to enter a new task, and displays the tasks entered by the user. Filters to-do and completed lists. When a user clicks the done checkbox the task is moved to the completed list. 

import { getTasks, deleteTasks, taskComplete } from "./dataaccess.js"
import { TaskSubmission } from "./tasksForm.js"

//sorts the the to-do list by date 
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
      
    
//displays the completed tasks
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

//provides an update on the percentage of completed tasks
export const progress = ()=> {
    const tasks = getTasks()
   // const countCompleted = tasks.filter(task=> task.complete === true).length
    //const countToDo = tasks.filter(task => task.complete === false).length
    let total = 0
    total = tasks.length
    
    const complete = tasks.filter(task => {
        return task.complete
    }).length
     const percentComplete = (total > 0) ? (complete/total) * 100:0 

    return `
    Your're ${percentComplete}% way there!`

}


    //console.log(countCompleted)
    //console.log(countToDo)

    const mainContainer = document.querySelector("#dashboard")    
    mainContainer.addEventListener("click", click => {
            if (click.target.id.startsWith("tasks--")) {
                const [,taskId] = click.target.id.split("--")
                taskComplete(parseInt(taskId))
            }
        })
      
    //opens up the new task form.
    export const openTask = ()  => {
        return `<button id = "newTaskButton">New Task </button>`
    }
    mainContainer.addEventListener("click", click => {
        if (click.target.id === "newTaskButton") {
            mainContainer.innerHTML += TaskSubmission()
        }
    })
    
    mainContainer.addEventListener("click", click => {
        if (click.target.id === "open-image-form") {
          document.querySelector('#image-form').innerHTML += ImageForm()
       
        }
    })

/*
this code allows a user to delete a task for the database.

const mainContainer = document.querySelector("#dashboard")
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("tasks--")) {
        const [,taskId] = click.target.id.split("--")
        deleteTasks(parseInt(taskId))
    }})*/

//moves task to a completed list when the done checkbox is checked 
