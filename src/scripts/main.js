import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews, fetchTags, setChuckFact, chuckNorrisFact, fetchJoke } from "./dataaccess.js"
import { fetchRandomFact } from "./cn_api.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    .then(() => fetchEvents())
    .then(() => fetchNews())
    .then(() => fetchImages())
    .then(() => fetchTasks())
    .then(() => fetchJoke())
    .then(() => fetchTags())
        .then(
            () => { if (!chuckNorrisFact()) {
                fetchRandomFact()
                .then((fact) => {
                    setChuckFact(fact)
                })
            }
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
    
    