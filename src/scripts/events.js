//events.js is responsible for the events section on the dashboard
import {getEvents, deleteEvent} from "./dataaccess.js"
import {EventForm} from "./eventForm.js"

const mainContainer = document.querySelector("#dashboard")

//click event to delete the event if you don't want to see it anymore
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("event--")) {
        const [, eventId] = click.target.id.split("--")
        deleteEvent(parseInt(eventId)).then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }
})
//this function is what displays the event
const convertEventToListElement = (eventObject) => {
    
    return `
    <li class="eventComplete">
    ${eventObject.name} 
    <button class="event__delete" id="event--${eventObject.id}">-
    </button>
    
    </li>`
}

//Events does several things. It finds the events and sorts them in chronological order. It also separates them and stores them by month. It displays in parenthesis how many events are happening in a month
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
    
//Each one of these for loops loop through the date of the event and sees if it matches the date index. If they match they are stored into an empty array that represents that month
//January
    for (const singleEvent of sortEvents) {
        const d = new Date(singleEvent.date);
        let month = d.getMonth();
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

    <h1 class="month" id="january">January (${(january.map(convertEventToListElement).length)})</h1>
    <div>${january.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="february">February (${(february.map(convertEventToListElement).length)})</h1>
    <div>${february.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="march">March (${(march.map(convertEventToListElement).length)})</h1>
    <div>${march.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="april">April  (${(april.map(convertEventToListElement).length)})</h1>
    <div>${april.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="may">May (${(may.map(convertEventToListElement).length)})</h1>
    <div>${may.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="june">June (${(june.map(convertEventToListElement).length)})</h1>
    <div>${june.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="july">July (${(july.map(convertEventToListElement).length)})</h1>
    <div>${july.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="august">August (${(august.map(convertEventToListElement).length)})</h1>
    <div>${august.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="september">September (${(september.map(convertEventToListElement).length)})</h1>
    <div>${september.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="october">October (${(october.map(convertEventToListElement).length)})</h1>
    <div>${october.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="november">November (${(november.map(convertEventToListElement).length)})</h1>
    <div>${november.map(convertEventToListElement).join("")}</div>
    <h1 class="month" id="december">December (${(december.map(convertEventToListElement).length)})</h1>
    <div>${december.map(convertEventToListElement).join("")}</div>

</section>`

    return html
}

export const OpenForm = () => {
    return `<button id="open-form">Create New</button>
    <div id="eventFormBox"></div>
    `
} 

mainContainer.addEventListener("click", click => {
    if (click.target.id === "open-form") {
document.querySelector("#eventFormBox").innerHTML += EventForm()
    }
})



//all this down here is responsible for getting exterior api and putting it onto our dashboard. It's actually part of a separate ticket, but since this is just for practice I did it here
const yapplicationState = {
    
}


export const fetchActivity = () => {
fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(
        (activitiesData) => {
            yapplicationState.activitiesData = activitiesData;
          }
    )}

export const GenerateRandomActivity = () => {
        let html = `
        <div>${yapplicationState.activitiesData.activity}!
        </div>
        `
        return html
    }
    

export const ActivityButton = () => {
    return`<button id="actButton">Activity?</button>
    <div id="activityBox"></div>`
}

mainContainer.addEventListener("click", click => {
    if (click.target.id === "actButton") {
        console.log(yapplicationState)
        document.querySelector("#activityBox").innerHTML += GenerateRandomActivity()
    }
})

export const RefreshButton = () => {
    return`<button id="refresh">Refresh Activity</button>`
}

mainContainer.addEventListener("click", click => {
    if (click.target.id === "refresh") {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

