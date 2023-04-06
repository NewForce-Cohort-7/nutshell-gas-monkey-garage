import { Messages } from "./messages.js"
import { userMessage } from "./userMessage.js"
import { ActivityButton, Events, OpenForm, RefreshButton } from "./events.js"
import { News, newArticle } from "./news.js"
import { OpenImageForm, Images } from "./images.js"
import { Tasks, openTask, finishedTasks, progress} from "./tasks.js" //all tasks by KT
import { DadJokes } from "./dadJokes.js"

export const Nutshell = () => {

  return `
  <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="images/gas-monkey.png" alt="GMG" width="120" height="auto" class="d-inline-block align-text-top">
            </a>
      </div>
  </nav>
  
  <div class="container text-center">
      <div class="row">
            <div class="col">
                  <section class="news">
                        <h1>News for the Astute</h1>
                        ${News()} 
                        ${newArticle()}
                  </section>
            </div>

            
      <div class="col">
            <section class="userMessage">
            ${userMessage()}
             </section>
            <section class="serviceForm">
            ${Messages()}
            </section>
      <section class="newTask">
            <h2>My Tasks</h2>
            ${openTask()}
            <canvas id="taskChart"></canvas>
            ${progress()}
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
                        </section>
                  </section>
            </div>
            <div class ="dad_jokes"> 
            <h3>Dad Jokes</h3>
            ${DadJokes()}
            </div>
            
            <div class="col">
                  <section class="images">
                        ${Images()}
                        ${OpenImageForm()}
                  </section>
                  <section id="image-form">
                  </section>
                  <section class="events">
                        <h2>Events</h2>
                        ${ActivityButton()}
                        ${RefreshButton()}
                        ${Events()}
                        ${OpenForm()}
                  </section>
            </div>
      </div>
</div>
`
}
