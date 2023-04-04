const mainContainer = document.querySelector("#dashboard")
const applicationState = {
    news: [],
    events: [],
    images: [], 
    messages: [],
    tasks: []
}

const API = "http://localhost:8088"

//Tasks API and Exports - KT

//get the Tasks from API and convert it into usable data
export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
        .then(response => response.json())
        .then(
            (taskSubmission) => {
                applicationState.tasks = taskSubmission
            }
        )
}

//import the tasks from the database - KT
export const getTasks = () => {
    return applicationState.tasks.map(tasks => ({...tasks}))
}

//send tasks submitted to the database -KT
export const sendTasks= (userTask) => {
    const fetchOptions = {
      method: "POST",
      headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTask)
    }
    return fetch(`${API}/tasks`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

//delete Tasks
export const deleteTasks = (id) => {
    const mainContainer = document.querySelector("#dashboard")
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
    }