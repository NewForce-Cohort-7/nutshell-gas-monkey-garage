import { sendNews } from "./dataaccess.js";

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        const newsTitle = document.querySelector("input[name='newsTitle']").value
        const newsDescription = document.querySelector("input[name='newsDescription']").value
        const newsSite = document.querySelector("input[name='newsSite']").value

        const dataToSendToAPI = {
            story: newsTitle,
            description: newsDescription,
            url: newsSite,
            date: new Date().toISOString()
        }

        sendNews(dataToSendToAPI)

    }
})

export const NewsForm = () => {
    let html = `
        
        <div class="field">
            <label class="label" for="newsTitle">Title</label>
            <input type="text" name="newsTitle" class="input" >
        </div>
        <div class="field">
            <label class="label" for="newsDescription">Synopsis</label>
            <input type="text" name="newsDescription" class="input" >
        </div>
        <div class="field">
            <label class="label" for="newsSite">URL</label>
            <input type="url" name="newsSite" class="input" >
        </div>
        
        <button class="button" id="saveArticle">Save Article</button>
    `
console.log(html)
    return html
}