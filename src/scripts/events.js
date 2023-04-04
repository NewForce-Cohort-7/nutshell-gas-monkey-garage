import {getEvents, deleteEvent} from "./dataaccess.js"
import {EventForm} from "./eventForm.js"

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("event--")) {
        const [, eventId] = click.target.id.split("--")
        deleteEvent(parseInt(eventId)).then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }
})

// they should see all of their events sorted into months, with a heading for each month and the total number of events in that month in parentheses beside the heading
const convertEventToListElement = (eventObject) => {

    return `
    <li class="eventComplete">
    ${
        eventObject.name
    } 
    <button class="event__delete" id="event--${
        eventObject.id
    }">-
    </button>
    
    </li>`
}

export const Events = () => {
    const events = getEvents()
    const sortEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date))

    const january = []
    const february = []
    const march = []
    const april = []
    const may = []
    const june = []
    const july = []
    const august = []
    const september = []
    const october = []
    const november = []
    const december = []
    
//January
    for (const singleEvent of sortEvents) {
        console.log(singleEvent.date)
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        console.log(month)
        if (month === 0) {
            january.push(singleEvent)
        }
    }
//February
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 1) {
            february.push(singleEvent)
        }
    }
//March
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 2) {
            march.push(singleEvent)
        }
    }
//April
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 3) {
            april.push(singleEvent)
        }
    }
//May
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 4) {
            may.push(singleEvent)
        }
    }
//June
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 5) {
            june.push(singleEvent)
        }
    }
//July
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 6) {
            july.push(singleEvent)
        }
    }
//August
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 7) {
            august.push(singleEvent)
        }
    }
//September
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 8) {
            september.push(singleEvent)
        }
    }
//October
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 9) {
            october.push(singleEvent)
        }
    }
//November
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 10) {
            november.push(singleEvent)
        }
    }
//December
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
        if (month === 11) {
            december.push(singleEvent)
        }
    }
    
    console.log(january)
    // console.log(february)
    // console.log(march)
    // console.log(april)
    // console.log(may)
    // console.log(june)
    // console.log(july)
    // console.log(august)
    // console.log(september)
    // console.log(october)
    // console.log(november)
    // console.log(december)

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
    return `<button id="open-form">Create New</button>`
} 

mainContainer.addEventListener("click", click => {
    if (click.target.id === "open-form") {
        mainContainer.innerHTML += EventForm()
    }
})
