import { sendNews } from "./dataaccess.js";

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        const newsTitle = document.querySelector("input[name='newsTitle']").value
        const newsDescription = document.querySelector("input[name='newsDescription']").value
        const newsSite = document.querySelector("input[name='newsSite']").value

        //*--*Correct timestamp does work when saving to the API*--*//
        
        const dataToSendToAPI = {
            story: newsTitle,
            description: newsDescription,
            url: newsSite,
            date: Date.now()
        }

        sendNews(dataToSendToAPI)

    }
})

export const NewsForm = () => {
    let html = `
        <section class="newsForm">
            <h2>Add a story to the feed</h2>
        </section>
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
    return html
}