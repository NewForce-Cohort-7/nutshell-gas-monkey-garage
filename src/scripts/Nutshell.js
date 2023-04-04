import { News } from "./news.js"
import { NewsForm } from "./newsForm.js"
import { newArticle } from "./news.js"
export const Nutshell = () => {

  return `
  <h1>News for the Astute</h1>
  ${newArticle()}
  <section class="news">
  ${News()}
</section>

<section class="newsForm">
      <h2>Add a story to the feed</h2>
      ${NewsForm()}
</section>
      
      
`
}
      // Render all your UI components here
