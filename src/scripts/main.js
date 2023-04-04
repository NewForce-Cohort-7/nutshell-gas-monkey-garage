import { Nutshell } from "./Nutshell.js"
import { fetchNews } from "./dataaccess.js"

const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchNews()
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
    "saveArticle",
    customEvent => {
        render()
    }
)