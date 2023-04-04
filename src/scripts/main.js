import { Nutshell } from "./Nutshell.js"
import { fetchNews } from "./dataaccess.js"
import { fetchEvents } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    .then(
        () => {
    fetchNews()
    .then(() => {
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

dashboard.addEventListener(
    "saveArticle",
    customEvent => {
        render()
    }
)