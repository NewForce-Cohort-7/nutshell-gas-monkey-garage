import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews } from "./dataaccess.js"
import { fetchActivity } from "./events.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    fetchActivity()
    fetchEvents()
    fetchNews()
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
),

render(),

dashboard.addEventListener(
    "saveEvent",
    customEvent => {
        render()
    }
),

dashboard.addEventListener(
    "saveArticle",
    customEvent => {
        render()
    }
)
    
    