import { Messages } from "./messages.js"
import { userMessage } from "./userMessage.js"
import { Events, OpenForm } from "./events.js"
import { News, newArticle } from "./news.js"
import { OpenImageForm, ImageForm, Images } from "./images.js"
import { Tasks, openTask} from "./tasks.js"

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
      </section>
      <section class="images">
            <h2>Images</h2>
            ${Images()}
            ${OpenImageForm()}
      </section>
      <section class="tasks">
            <h2>Tasks</h2>
            ${Tasks()}
            ${openTask()}
            </section>`
}
