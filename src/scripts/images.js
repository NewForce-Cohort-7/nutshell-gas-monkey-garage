import { getImages, saveImage, deleteImage } from "./dataaccess";

const images = getImages()
const mainContainer = document.querySelector("#container")

export const ImageForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="imageUrl"><b>URL</b></label>
            <input type="text" name="imageUrl" class="input" />
            <label class="label" for="imageCaption"><b>Your Caption</b></label>
            <input type="text" name="imageCaption" class="input" />
        </div>
        <button class="button" id="submitImage"><b>Submit</b></button>`

    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitImage") {
        // Get what the user typed into the form fields
        const userUrl = document.querySelector("input[name='imageUrl']").value
        const userCaption = document.querySelector("input[name='imageCaption']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            url: userUrl,
            caption: userCaption,
            date: new Date.now()
        }

        // Send the data to the API for permanent storage
        saveImage(dataToSendToAPI)
    }
})