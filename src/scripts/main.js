import { Nutshell } from "./Nutshell.js"
import { fetchActivity } from "./events.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews, fetchJoke } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    .then(() => fetchEvents())
    .then(() => fetchNews())
    .then(() => fetchImages())
    .then(() => fetchTasks())
    .then(() => fetchJoke())
    .then(() => fetchActivity())
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
    
    