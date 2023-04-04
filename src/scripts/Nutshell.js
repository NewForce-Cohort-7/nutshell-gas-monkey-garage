import { Messages } from "./messages.js"
import { userMessage } from "./userMessage.js"
export const Nutshell = () => {
      return `
      <h1>Nutshell</h1>
      <section class="userMessage">
      ${userMessage()}
      </section>
      <section class="serviceForm">
      ${Messages()}
      </section>`
  
     
}