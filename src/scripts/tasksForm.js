//by kathleen tyner. This code presents the form the user will use to enter tasks into the dashboard.
import { sendTasks } from "./dataaccess.js";
const mainContainer = document.querySelector("#dashboard")


// task form
export const TaskSubmission = () => {
    let html = `
       <section class="taskForm">
        <div class="field">
            <label class="label" for="taskDescription">Task:</label> <br>
            <input type="text" name="taskDescription" class="input" size="100"/>
        </div>

        <div class="field">
        <div class="field">
            <label class="label" for="deadline">Complete By:</label><br>
            <input type="date" name="date" class="input"  size="50"/>

    </div>
        <button id ="taskButton">Submit Task</button>
     </section>     

        `
    return html
}


//submit task button click event to send user completed fields to the API 
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "taskButton") {
      
        const userTaskDescription = document.querySelector("input[name='taskDescription']").value
        const userDate = document.querySelector("input[name='date']").value
       
       //ensures all fields are completed. 
        if(!userTaskDescription || !userDate) {
            window.alert("Stay on task! All fields must be completed")
        } else {
        
        const dataToSendToAPI = {
            taskDescription: userTaskDescription,
            date: userDate,
            complete: false
        }
        sendTasks(dataToSendToAPI)
        mainContainer.dispatchEvent(new CustomEvent ("stateChanged"))
    }
}

})
mainContainer.addEventListener("click", click => {
    if (click.target.id === "newTaskButton") {
document.querySelector("#taskForm").innerHTML += TaskSubmission()
}
}
)
