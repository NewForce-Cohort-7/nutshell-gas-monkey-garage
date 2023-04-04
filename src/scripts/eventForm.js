import { sendEvent } from "./dataaccess.js"
//HTML input fields are how you collect user data. These fields collect the information from the user that Maude and Merle want about a service request.
export const EventForm = () => {
    let html = `<section class="blankEventForm">
        <div class="eventField">
            <label class="label" for="eventName">Name</label>
            <input type="text" name="eventName" class="input" />
        </div>
        <div class="eventField">
            <label class="label" for="dateOfEvent">Date</label>
            <input type="date" name="dateOfEvent" class="input" />
        </div>
        <div class="eventField">
            <label class="label" for="location">Location</label>
            <input type="text" name="location" class="input" />
        </div>

        <button class="button" id="saveEvent">Save Event</button>
        </section>
    `
    const mainContainer = document.querySelector("#dashboard")

    return html
}
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='eventName']").value
        const userDate = document.querySelector("input[name='dateOfEvent']").value
        const userLocation = document.querySelector("input[name='location']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userName,
            date: userDate,
            location: userLocation,
        }

        // Send the data to the API for permanent storage
        sendEvent(dataToSendToAPI)
    }
})



