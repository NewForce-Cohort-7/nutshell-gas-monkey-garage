import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchImages } from "./dataaccess.js"
import { fetchEvents, fetchTasks, fetchMessages } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    fetchEvents()
    fetchImages()
    fetchTasks()
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
      
        }
    )

}

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
