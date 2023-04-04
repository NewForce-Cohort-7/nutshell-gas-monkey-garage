import { getNews } from "./dataaccess.js";
import { deleteNews } from "./dataaccess.js";

export const News = () => {
    const stories = getNews()
    const timeStamp = Date.now()
    const currentDate = new Date(timeStamp)

    let html = `
    <ul>
        ${
            stories.map(story => { return `<li><h2>${story.story}</h2> ${story.description} <h3><a href="https://www.youtube.com/watch?v=l2m4VOT1Tio">${story.url}</a></h3> <h4>Posted on: ${currentDate}</h4>  <button class="news__delete" id="news--${story.id}">- </button>
            </li>`}).join("")
        }
        
        </ul>`

        return html
}

export const newArticle = () => {
    return `<button class="newArticle">Create Story</button>`
}

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("news--")) {
        const [,newsId] = click.target.id.split("--")
        deleteNews(parseInt(newsId))
        // window.alert("There is no delete, only news.")
    }
})