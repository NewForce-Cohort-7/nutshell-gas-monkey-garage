import { getImages, saveImage, deleteImage } from "./dataaccess.js";

//Assigns mainContainer variable to dashboard id inside of html
const mainContainer = document.querySelector("#dashboard")

//This maps out the array of image information and then adds that information to an html so that it can be viewed on the page after data us sent to the database
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

//Creates a button on the webpage that says Add Image, we use this later to open the hidden image form
export const OpenImageForm = () => {
    return`<button id="open-image-form">Add Image</button>`
}

//Adds a click event to the id set in OpenImageForm, when clicked this adds ImageForm to the HTML without refresh
mainContainer.addEventListener("click", click => {
    if (click.target.id === "open-image-form") {
      mainContainer.innerHTML +=    ImageForm()
   
    }
})

//A simple html form that asks for the information needed to add a new image (appears after clicking Add Image tied to OpenImageForm)
const ImageForm = () => {
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

//A click event that locates the image id in Images() and then uses the Delete method on that id to delete images uploaded  to the page
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("image--")) {
        const [,imageId] = clickEvent.target.id.split("--")
        deleteImage(parseInt(imageId))
    }
})

//A click event that targets the submitImage id inside of the ImageForm to save the information in the form and use the POST method to add to database
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