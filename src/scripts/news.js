import { getNews, deleteNews, getTags } from "./dataaccess.js";
import { NewsForm } from "./newsForm.js";

export const News = () => { 
    const stories = getNews()
    const tags = getTags()
   
   
    
    //*--*All URL links lead to the same page when the user clicks on the hypertext*--*//
    let html = ` 
    <ul>
        ${
            stories.map(story => { 
                return `<li><h2>${story.story}</h2> ${story.description} <h3><a href="https://www.youtube.com/watch?v=l2m4VOT1Tio">${story.url}</a></h3> <h4>Posted on: ${new Date(story.date).toLocaleString()}</h4> <h4><b>Tags: ${tags.tag}</b></h4>  <button class="news__delete" id="news--${story.id}">- </button>
            </li>`}).join("")
        }
        
        </ul>`

        return html
}

export const newArticle = () => {
    return `<button id="newArticle">Create Story</button>`
}



const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id === "newArticle") {
      mainContainer.innerHTML += NewsForm()}
    })

    mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("news--")) {
        const [,newsId] = click.target.id.split("--")
        deleteNews(parseInt(newsId))
        
    }
})