import { Events, OpenForm } from "./events.js"
import { Tasks, openTask} from "./tasks.js"

export const Nutshell = () => {
return`
      <section class="events">
            <h2>Events</h2>
            ${Events()}
            ${OpenForm()}
      </section>
      <section class="tasks">
            <h2>Tasks</h2>
            ${Tasks()}
            ${openTask()}
            </section>`
      }


      // Render all your UI components here

