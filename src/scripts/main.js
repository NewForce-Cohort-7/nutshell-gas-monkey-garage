import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews, fetchTags } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    fetchEvents()
    fetchNews()
    fetchImages()
    fetchTasks()
    fetchTags()
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
    
    