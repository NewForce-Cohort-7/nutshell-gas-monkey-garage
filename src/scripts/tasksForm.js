import { sendTasks } from "./dataaccess.js";
const mainContainer = document.querySelector("#dashboard")

export const TaskSubmission = () => {
    let html = `
       
        <div class="field">
            <label class="label" for="taskDescription">Task:</label> <br>
            <input type="text" name="taskDescription" class="input" size="100"/>
        </div>

        <div class="field">
        <div class="field">
            <label class="label" for="deadline">Complete By:</label><br>
            <input type="time" name="time" class="input"/>
            <input type="date" name="date" class="input"  size="50"/>

    </div>
        <button id ="button">Submit Task</button>
          

        `
    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button") {
        const userTaskDescription = document.querySelector("input[name='taskDescription']").value
        const userTime = document.querySelector("input[name='time']").value
        const userDate = document.querySelector("input[name='date']").value
        const dataToSendToAPI = {
            taskDescription: userTaskDescription,
            time: userTime,
            date: userDate
        }
        sendTasks(dataToSendToAPI)
        mainContainer.dispatchEvent(new CustomEvent ("stateChanged"))
    }
})