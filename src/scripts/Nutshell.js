import { Messages } from "./messages.js"
import { userMessage } from "./userMessage.js"
import { Events, OpenForm } from "./events.js"
import { News } from "./news.js"
import { newArticle } from "./news.js"
export const Nutshell = () => {

  return `
  <h1>News for the Astute</h1>
<section class="news">
  ${News()} 
  ${newArticle()}
</section>

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
</section>`
      

}