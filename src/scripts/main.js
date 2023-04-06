import { Nutshell } from "./Nutshell.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews, fetchTags, setChuckFact, chuckNorrisFact, fetchJoke } from "./dataaccess.js"
import { fetchRandomFact } from "./cn_api.js"
import { fetchActivity } from "./events.js"
import { fetchEvents, fetchTasks, fetchMessages, fetchImages, fetchNews, fetchJoke, getTasks } from "./dataaccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchMessages()
    .then(() => fetchEvents())
    .then(() => fetchNews())
    .then(() => fetchImages())
    .then(() => fetchTasks())
    .then(() => fetchJoke())
    .then(() => fetchTags())
    .then(() => fetchActivity())
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
        }
    )
    .then(() => {
        const tasks = getTasks()
        const countCompleted = tasks.filter(task=> task.complete === true).length
        const countToDo = tasks.filter(task => task.complete === false).length
 
        const taskChart = document.getElementById('taskChart');

        new Chart(taskChart, {
            type: 'pie',
            data: {
              labels: ['To-Do', 'Done'],
              datasets: [{
                label: 'Tasks',
                data: [countCompleted, countToDo],  
              }]
            },
            options: {}
        });
    })
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
    
