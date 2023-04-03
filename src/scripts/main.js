import { Nutshell } from "./Nutshell.js"
import { fetchTasks } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchTasks()
    .then(() => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()

dashboard.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

dashboard.addEventListener(
    "saveEvent",    
    customEvent => {
        render()
    }
)
