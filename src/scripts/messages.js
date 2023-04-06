import { getMessages, deleteMessage, updateLikeCount, updateDislikeCount } from "./dataaccess.js";

export const Messages = () => {
const messages = getMessages().sort((a, b) => new Date(a.date) - new Date(b.date));
  let html = '<ul>';
    const convertMessageToListElement = messages.map((message) => {
   
      const likes = message.likes || 0;
      const dislikes = message.dislikes || 0;

    return ` 
    <li class="alignMessage">
              <div class ="border">${message.message}</div>
              <div class ="postSize"> Posted by ${message.userName} on ${message.date} </div>
              <div title="Like"> <button class="message__like" id="like--${message.id}">
              
              </button>  
              <div class="messageLike"> (${likes})</div> </div> 
             <div title="Dislike"> <button class="message__dislike" id="dislike--${message.id}">
              </button>
             <div class="messageDislike"> (${dislikes}) </div> </div>
              <div title="DELETE">
              <button class="message__delete" id="message--${message.id}">
                X
              </button> 
              </div>
            </li>
            `;
  });

  html += convertMessageToListElement.join("");
  html += "</ul>";

  return html;
};

const mainContainer = document.querySelector("#dashboard");

mainContainer.addEventListener("click", (click) => {
  //deletes message if button is clicked
  if (click.target.id.startsWith("message--")) {
    const [, messageId] = click.target.id.split("--");
    deleteMessage(parseInt(messageId));
 
  }
   //these two are responsible for the use of the like and dislike button
  else if (click.target.classList.contains("message__like")) {
    const [, messageId] = click.target.id.split("--");
    updateLikeCount(parseInt(messageId));
    const messageElement = click.target.parentElement;
    const likeButton = messageElement.querySelector(".messageLike");
    const [likeText, likeCount] = likeButton.textContent.split("(");
    likeButton.textContent = `${likeText}(${parseInt(likeCount) + 1})`;
  
  }
  
  else if (click.target.classList.contains("message__dislike")) {
    const [, messageId] = click.target.id.split("--");
    updateDislikeCount(parseInt(messageId));
    const messageElement = click.target.parentElement;
    const dislikeButton = messageElement.querySelector(".messageDislike");
    const [dislikeText, dislikeCount] = dislikeButton.textContent.split("(");
    dislikeButton.textContent = `${dislikeText}(${parseInt(dislikeCount) + 1})`;
  }
});

