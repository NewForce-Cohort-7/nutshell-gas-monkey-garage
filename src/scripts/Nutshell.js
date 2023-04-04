import { Events, OpenForm } from "./events.js"

export const Nutshell = () => {
return`
      <section class="events">
            <h2>Events</h2>
            ${Events()}
            ${OpenForm()}
      </section>`
      // Render all your UI components here
}