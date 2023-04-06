import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews, fetchTags, setChuckFact, chuckNorrisFact } from "./dataaccess.js"
import { fetchRandomFact } from "./cn_api.js"


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
                if (!chuckNorrisFact()) {
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
    
    