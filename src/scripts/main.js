import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    .then(fetchTasks())
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
