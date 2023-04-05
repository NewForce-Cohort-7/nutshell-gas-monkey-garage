import { Messages } from "./messages.js"
import { userMessage } from "./userMessage.js"
import { Events, OpenForm } from "./events.js"
import { News, newArticle } from "./news.js"
import { OpenImageForm, ImageForm, Images } from "./images.js"
import { Tasks, openTask, finishedTasks} from "./tasks.js"

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
      <section class="newTask">
      <h2>My Tasks</h2>
      ${openTask()}
      </section>
      <section class="tasks">
            <section class="tasksToDo">
            <h2> To-Do List </h2> 
            ${Tasks()}
            </section>
      <section class="finishedTasks">
            <h2> Done! </h2>
            ${finishedTasks()}
      </section>
      </section>`
}
