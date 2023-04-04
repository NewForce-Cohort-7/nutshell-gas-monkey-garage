const mainContainer = document.querySelector("#dashboard")
const applicationState = {
    news: [],
    events: [],
    images: [], 
    messages: [],
    tasks: []
}
const API = "http://localhost:8088"

export const fetchNews = () => {
    return fetch(`${API}/news`)
    .then(response => response.json())
    .then(
        (newsStories) => {
            applicationState.news = newsStories
        }
    )
}

export const getNews = () => {
    return applicationState.news.map((singleNewsStory) => ({...singleNewsStory}))
};

export const sendNews = (userNewsAddition) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userNewsAddition)
    }

    return fetch(`${API}/news`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteNews = (id) => {
    return fetch(`${API}/news/${id}`, { method: "DELETE"})
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}