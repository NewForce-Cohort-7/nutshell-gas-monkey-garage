import { Nutshell } from "./Nutshell.js"
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
    .then(() => fetchActivity())
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
    
    