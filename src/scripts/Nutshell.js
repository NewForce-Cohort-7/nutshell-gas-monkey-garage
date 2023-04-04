import { News } from "./news.js"
import { newArticle } from "./news.js"
import { Events, OpenForm } from "./events.js"
export const Nutshell = () => {

  return `
  <h1>News for the Astute</h1>
<section class="news">
  ${News()} 
  ${newArticle()}
</section>

<section class="events">
      <h2>Events</h2>
      ${Events()}
      ${OpenForm()}
</section>`
      

}





