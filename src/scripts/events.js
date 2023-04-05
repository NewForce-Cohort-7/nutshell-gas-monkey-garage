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
    ${eventObject.name} 
    <button class="event__delete" id="event--${eventObject.id}">-
    </button>
    
    </li>`
}

//NOT QUITE DONE WITH TICKET 2: EVENTS BY MONTH

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

    let html = `<section class="eventsList">

    <h1 class="month" id="january">January</h1>
    <div>${january.map(convertEventToListElement).join("")} (${(january.map(convertEventToListElement).length)})</div>
    <h1 class="month" id="february">February</h1>
    <div>${february.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="march">March</h1>
    <div>${march.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="april">April</h1>
    <div>${april.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="may">May</h1>
    <div>${may.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="june">June</h1>
    <div>${june.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="july">July</h1>
    <div>${july.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="august">August</h1>
    <div>${august.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="september">September</h1>
    <div>${september.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="october">October</h1>
    <div>${october.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="november">November</h1>
    <div>${november.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="december">December</h1>
    <div>${december.map(convertEventToListElement).join("")}</div>

</section>`

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
