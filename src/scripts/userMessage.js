import {sendMessage} from "./dataaccess.js"
export const userMessage = () => {
    let html = `
        <div class="field">  
          <div class="messageField">
          <textarea class="input_message" placeholder="Type your message here..."></textarea>
        </div>
        </div>
        <div class="field">
            <label class="label" for="userName">User Name</label>
            <input type="text" name="userName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date Posted</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitMessage">Submit Message</button>
    `

    return html
};


const mainContainer = document.querySelector("#dashboard")

//sends data once clicked
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitMessage") {
        // Get what the user typed into the form fields
        const userMessage = document.querySelector("textarea[class='input_message']").value
        const userName = document.querySelector("input[name='userName']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            message: userMessage,
            userName: userName,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendMessage(dataToSendToAPI)
    }
})