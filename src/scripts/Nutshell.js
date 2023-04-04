import { Messages } from "./messages.js"
import { userMessage } from "./userMessage.js"
import { Events, OpenForm } from "./events.js"
import { Images, ImageForm } from "./images.js"
import { Tasks, openTask} from "./tasks.js"

export const Nutshell = () => {
      return `
      <h1>Nutshell</h1>
      <section class="userMessage">
      ${userMessage()}
      </section>
      <section class="serviceForm">
      ${Messages()}
      </section>
      <section class="events">
            <h2>Events</h2>
            ${Events()}
            ${OpenForm()}
      </section>
      <section class="images">
            <h2>Images</h2>
            ${Images()}
            ${ImageForm()}
      </section>
      <section class="tasks">
            <h2>Tasks</h2>
            ${Tasks()}
            ${openTask()}
            </section>`
}
