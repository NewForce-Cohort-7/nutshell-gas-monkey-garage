import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    fetchEvents()
    fetchImages()
    fetchTasks()
    .then(() => {
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
