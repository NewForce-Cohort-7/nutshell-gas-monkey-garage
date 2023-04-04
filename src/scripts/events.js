import {getEvents, deleteEvent } from "./dataaccess.js"
import {EventForm} from "./eventForm.js"

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("event--")) {
        const [,eventId] = click.target.id.split("--")
        deleteEvent(parseInt(eventId))
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
    }
})

// they should see all of their events sorted into months, with a heading for each month and the total number of events in that month in parentheses beside the heading
const convertEventToListElement = (eventObject) => {
    console.log(eventObject)
    // eventObject.sort((a,b) => new Date(a.date) - new Date(b.date))
    return `
    <li class="eventComplete">
    ${eventObject.name} 
    <button class="event__delete" id="event--${eventObject.id}">-
    </button>
    
    </li>`
}

export const Events = () => {
    const events = getEvents()
    const sortEvents = events.sort((a,b) => new Date(a.date) - new Date(b.date))



    let html = `
        <ul class="eventsList"> 
            ${
                sortEvents.map(convertEventToListElement).join("")
            }
        </ul>
    `

    return html
}

export const OpenForm = () => {
  return`<button id="open-form">Create New</button>`
}

mainContainer.addEventListener("click", click => {
  if (click.target.id === "open-form") {
    mainContainer.innerHTML +=    EventForm()
}
})
