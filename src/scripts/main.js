import { Nutshell } from "./Nutshell.js"
import { fetchMessages, fetchEvents } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    
    fetchEvents()
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

dashboard.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()
dashboard.addEventListener(
    "stateChanged", customEvent => {
        render()
    }
)


dashboard.addEventListener(
    "saveEvent",
    customEvent => {
        render()
    }
)
