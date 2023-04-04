const mainContainer = document.querySelector("#dashboard")
const applicationState = {
    news: [],
    events: [],
    images: [], 
    messages: [],
    tasks: []
}

const API = "http://localhost:8088"

export const fetchImages = () => {
    return fetch(`${API}/images`)
        .then(response => response.json())
        .then(
            (imageArray) => {
                applicationState.images = imageArray
            }
        )
}

export const saveImage = (userImage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userImage)
    }


    return fetch(`${API}/images`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteImage = (id) => {
    return fetch(`${API}/images/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getImages = () => {
    return applicationState.images.map(image => ({...image}))
}