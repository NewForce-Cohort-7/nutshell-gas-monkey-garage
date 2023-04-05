import { sendTasks } from "./dataaccess.js";
const mainContainer = document.querySelector("#dashboard")

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

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "taskButton") {
        const userTaskDescription = document.querySelector("input[name='taskDescription']").value
        const userDate = document.querySelector("input[name='date']").value
        const dataToSendToAPI = {
            taskDescription: userTaskDescription,
            date: userDate,
            complete: false
        }
        sendTasks(dataToSendToAPI)
        mainContainer.dispatchEvent(new CustomEvent ("stateChanged"))
    }
})