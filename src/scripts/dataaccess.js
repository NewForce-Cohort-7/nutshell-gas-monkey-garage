const mainContainer = document.querySelector("#dashboard")
const applicationState = {
    news: [],
    events: [],
    images: [], 
    messages: [],
    tasks: []
}

const API = "http://localhost:8088"

export const fetchEvents = () => {
    return fetch(`${API}/events`)
        .then(response => response.json())
        .then(
            (upcomingEvents) => {
                applicationState.events = upcomingEvents
            }
        )
    }

    export const getEvents = () => {
        return applicationState.events.map(event => ({...event}))
    }

    //As the person is typing into the form fields in ServiceForm.js, they are changing the state of the application, but it is transient state because the person hasn't committed to the service request until the button is clicked. When the person clicks the button, our code takes the transient state and converts it into permanent state by storing it in the database.json file by using a fetch() call.
export const sendEvent = (userEvents) => {
    const fetchOptions = {
        //The POST method on any HTTP request means "Hey API!! I want you to create something new!"
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEvents)
    }

    const mainContainer = document.querySelector("#dashboard")
    return fetch(`${API}/events`, fetchOptions)   //location of said heist
                                                    //this changes the string into json, and json turns it into an object
        .then(response => response.json())          //dirty money => clean money (.json())
        .then(() => {                               //take clean money => do stuff with it
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteEvent = (id) => {
    const mainContainer = document.querySelector("#dashboard")
    return fetch(`${API}/events/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
