import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchImages } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    fetchImages()
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
    "saveEvent",
    customEvent => {
        render()
    }
)
