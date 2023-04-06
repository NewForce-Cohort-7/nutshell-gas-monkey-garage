import { fetchRandomFact } from "./cn_api.js";
import { chuckNorrisFact, setChuckFact } from "./dataaccess.js";

//Responsible for fetching a new fact about Chuck Norris from API
const generateFactButtonHandler = () => {
    fetchRandomFact().then(fact => setChuckFact(fact))
}

//Generates the HTML code for the fact
const generateCNHTML = (chuckFact) => {
    return `
    <div id="chuckNorrisFact">
    <h2>Facts about Chuck Norris</h2>
    <p>${chuckFact}<p>
    <button id="generateFact">Random Fact</button>
    </div>`
}

//Rendering the current fact
const render = () => {
    const chuckFact = chuckNorrisFact()
    const html = generateCNHTML(chuckFact)
    document.querySelector("#chuckNorrisFact").innerHTML = html
}

//Generates HTML code for the fact without rendering it
export const createChuckHTML = () => {
    const chuckFact = chuckNorrisFact()
    const html = generateCNHTML(chuckFact)
    return html
}

//innerHTML for the fact
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#chuckNorrisFact").innerHTML = createChuckHTML()
})

//Event listener for the facts
document.addEventListener("click", event => {
    if (event.target.id === "generateFact") {
        generateFactButtonHandler()
    }
})

document.addEventListener("stateChanged", event => {
    render()
})