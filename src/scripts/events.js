import {getEvents, deleteEvent } from "./dataaccess.js"
import {EventForm} from "./eventForm.js"

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("event--")) {
        const [,eventId] = click.target.id.split("--")
        deleteEvent(parseInt(eventId))
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
    }
})

const convertEventToListElement = (eventObject) => {
        return `<li class="eventComplete">
        ${eventObject.name} 
        <button class="event__delete" id="event--${eventObject.id}">-
        </button>
   
</li>`
}

export const Events = () => {
    const events = getEvents()
    const sortEvents = events.sort((a,b) => new Date(a.date) - new Date(b.date))

    let html = `
        <ul class="eventsList"> 
            ${
                sortEvents.map(convertEventToListElement).join("")
            }
        </ul>
    `

    return html
}

export const OpenForm = () => {
  return`<button id="open-form">Open Form</button>`
}

mainContainer.addEventListener("click", click => {
  if (click.target.id === "open-form") {
    mainContainer.innerHTML +=    EventForm()
 
    console.log("you clicked me")
  }
})

// need to refresh once save event is clicked.





// `

// <div id="form-container" style="display: none;">
//   <label for="name">Name:</label>
//   <input type="text" id="name" name="name">

//   <label for="email">Email:</label>
//   <input type="email" id="email" name="email">

//   <button id="submit-form">Submit</button>
// </div>`

// const openFormButton = document.getElementById('open-form');
// const formContainer = document.getElementById('form-container');
// const submitButton = document.getElementById('submit-form');

// openFormButton.addEventListener("click", () => {
//   formContainer.style.display = "block";
// });

// submitButton.addEventListener('click', () => {
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;

//   const formData = {
//     name,
//     email,
//   };

//   localStorage.setItem('form-data', JSON.stringify(formData));

//   formContainer.style.display = 'none';
// });