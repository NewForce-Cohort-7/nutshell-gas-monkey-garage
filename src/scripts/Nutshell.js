import { Events, OpenForm } from "./events.js"
import { Images, ImageForm } from "./images.js"

export const Nutshell = () => {
return`
      <section class="events">
            <h2>Events</h2>
            ${Events()}
            ${OpenForm()}
      </section>
      <section class="images">
            <h2>Images</h2>
            ${Images()}
            ${ImageForm()}
      </section>`
      // Render all your UI components here
}