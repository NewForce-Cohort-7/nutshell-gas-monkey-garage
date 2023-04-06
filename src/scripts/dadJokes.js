import { getDadJokes,  } from "./dataaccess.js";


    const mainContainer = document.querySelector("#dashboard")

//This maps out the array of dadJoke information and then adds that information to an html so that it can be viewed on the page after data us sent to the database
export const DadJokes = () => {
    
    const dadJokes = getDadJokes()

    let html = `
            ${
                
                     `
                    <div class="dadJokes">
                        ${dadJokes.setup}? <br><br> ${dadJokes.punchline}
                    </div>

                    
                    
                `
                
            }
    `

    return html
}


