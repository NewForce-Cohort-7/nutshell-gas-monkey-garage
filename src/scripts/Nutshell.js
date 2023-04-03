import { openTask } from "./tasks.js";
import { Tasks } from "./tasks.js";


export const Nutshell = () => {
      return `
      <section class ="header">Tasks</section>
    <section class="taskForm">
           ${openTask()}
       </section>

       <section class="tasks">
           <h2>To Do List</h2>
           ${Tasks()}
       </section>

       
   `
}

