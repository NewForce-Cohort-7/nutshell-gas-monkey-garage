import { getImages, saveImage, deleteImage } from "./dataaccess.js";

const mainContainer = document.querySelector("#dashboard")

export const Images = () => {
    
    const images = getImages()

    let html = `
            ${
                images.map((image) => {
                    return `
                    <div class="images">
                        <img class="image" id="${image.id}" src="${image.url}"/>
                    </div>

                    <li>
                        ${image.caption}
                        ${image.date}
                        <button class="image__delete"
                                id="image--${image.id}">
                            Delete
                        </button>
                    </li>
                `
                }).join("")
            }
    `

    return html
}

export const OpenImageForm = () => {
    return`<button id="open-image-form">Add Image</button>`
}

mainContainer.addEventListener("click", click => {
    if (click.target.id === "open-image-form") {
      mainContainer.innerHTML +=    ImageForm()
   
    }
})

export const ImageForm = () => {
    let html = `
        <div class="imageForm">
            <label class="label" for="imageUrl"><b>URL</b></label>
            <input type="text" name="imageUrl" class="input" />
            <label class="label" for="imageCaption"><b>Your Caption</b></label>
            <input type="text" name="imageCaption" class="input" />
        </div>
        <button class="button" id="submitImage">Submit</button>`

    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("image--")) {
        const [,imageId] = clickEvent.target.id.split("--")
        deleteImage(parseInt(imageId))
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitImage") {

        // Get what the user typed into the form fields
        const userUrl = document.querySelector("input[name='imageUrl']").value
        const userCaption = document.querySelector("input[name='imageCaption']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            url: userUrl,
            caption: userCaption,
            date: new Date()
        }

        // Send the data to the API for permanent storage
        saveImage(dataToSendToAPI)
    }
})