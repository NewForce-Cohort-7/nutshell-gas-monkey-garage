import { Nutshell } from "./Nutshell.js"
import { fetchNews } from "./dataaccess.js"
import { fetchEvents } from "./dataaccess.js"
import { fetchMessages } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    fetchEvents()
    fetchNews()
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
    
    