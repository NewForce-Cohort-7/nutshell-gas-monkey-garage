//click event to target image.hashtage
//create conditional if image.hashtage === image.hashtag
//filterish? to regenerate html to only show images with shared hashtag

import { getImages, saveImage, deleteImage } from "./dataaccess.js";

let selectHashtag = null

//Assigns mainContainer variable to dashboard id inside of html
const mainContainer = document.querySelector("#dashboard")

//This maps out the array of image information and then adds that information to an html so that it can be viewed on the page after data us sent to the database
export const Images = () => {
    
    const images = getImages()

    //filteredImages is declared by an if/else statement to show only the images that include the hashtag selected in the click and if no tag is selected then filteredImages is all images
    const filteredImages = selectHashtag ? images.filter(image => image.hashtag && image.hashtag.includes(selectHashtag)) : images

    let html = `
            ${
                //Takes the filteredImages declared above and maps them out to return them in the html
                filteredImages.map((image) => {
                    //Verifies that the hashtag buttons has a length greater than 0 and else no hashtag is present for the image it produces nothing to avoid error in webpage 
                    const hashtagButtons = (image.hashtag && image.hashtag.length > 0) 
                    ? image.hashtag.map(hashtag => `<button class="image-tag" data-tag="${hashtag}">${hashtag}</button>`).join("")
                    : ""
                        return `
                        <h2>Images</h2>
                        <div class="images">
                            <img class="image" id="${image.id}" src="${image.url}"/>
                        </div>

                        <li>
                            ${image.caption}
                            <br></br>
                            ${hashtagButtons}
                            <br></br>
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

//A simple html form that asks for the information needed to add a new image (appears after clicking Add Image tied to OpenImageForm)
const ImageForm = () => {
    let html = `
        <div class="imageForm">
            <label class="label" for="imageUrl"><b>URL</b></label>
            <input type="text" name="imageUrl" class="input" /> <br></br>
            <label class="label" for="imageCaption"><b>Your Caption</b></label>
            <input type="text" name="imageCaption" class="input" />
            <label class="label" for="imageHashtag"><b>Hashtags</b></label>
            <input type="text" id="imageHashtag"  placeholder="#tag1, #tag2, #tag3" />
        </div>
        <button class="button" id="submitImage">Submit</button>`

    return html
}

//Adds a click event to the id set in OpenImageForm, when clicked this adds ImageForm to the HTML without refresh
mainContainer.addEventListener("click", click => {
    if (click.target.id === "open-image-form") {
      document.querySelector('#image-form').innerHTML += ImageForm()
   
    }
})

//Click event that targets the hashtag and declares my selectHashtag into the tag selected so that it can be sorted in filtered images inside of the Images() function
document.addEventListener("click", event => {
    if (event.target.classList.contains("image-tag")) {
        selectHashtag = event.target.dataset.tag;
        console.log(selectHashtag)
    }
    // Update the HMTL of the images container with the filtered articles
    document.querySelector(".images").innerHTML = Images();
})

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
        const userHashtag = document.querySelector("#imageHashtag").value.split(',').map(hashtag => hashtag.trim())
        
        if(!userUrl || !userCaption) {
            window.alert("Insufficient Information: Url and Caption Field Required!")
        } else {

        // Make an object out of the user input
        const dataToSendToAPI = {
            url: userUrl,
            caption: userCaption,
            hashtag: userHashtag,
            date: new Date()
        }
        
        // Send the data to the API for permanent storage
        saveImage(dataToSendToAPI)
    }}
})