// const applicationState = {
//     news: [],
//     events: [],
//     images: [], 
//     messages: [],
//     tasks: []
// }

// const API = "http://localhost:8088"
// const mainContainer = document.querySelector("#dashboard")

// export const fetchMessages = () => {
//     return fetch(`${API}/messages`)
//     .then(response => response.json())
//     .then(
//         (serviceMessages) => {
//                 // Store the external state in application state
//                 applicationState.messages = serviceMessages
//             }
//             )
//         }

//         export const getMessages = () => {
//             return applicationState.messages.map(message => ({...message}))
//         }


//         export const sendMessage = (userServicemessage) => {
//             const fetchOptions = {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(userServicemessage)
//             }

//             return fetch(`${API}/messages`, fetchOptions)
//         .then(response => response.json())
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })
// } 

// export const deleteMessage = (id) => {
//     return fetch(`${API}/messages/${id}`, { method: "DELETE" })
//         .then(
//             () => {
//                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//             }
//         )
// }

const applicationState = {
    news: [],
    events: [],
    images: [],
    messages: [],
    tasks: [],
  };
  
  const API = "http://localhost:8088";
  const mainContainer = document.querySelector("#dashboard");
  
  export const fetchMessages = () => {
    return fetch(`${API}/messages`)
      .then((response) => response.json())
      .then((serviceMessages) => {
        // Store the external state in application state
        applicationState.messages = serviceMessages;
      });
  };
  
  export const getMessages = () => {
    return applicationState.messages.map((message) => ({ ...message }));
  };
  
  export const sendMessage = (userServicemessage) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userServicemessage),
    };
  
    return fetch(`${API}/messages`, fetchOptions)
      .then((response) => response.json())
      .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
      });
  };
  
  export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" }).then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
  };
  
  export const updateLikeCount = (id) => {
    const messageToUpdate = applicationState.messages.find(
      (message) => message.id === id
    );
    messageToUpdate.likes++;
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageToUpdate),
    };
    return fetch(`${API}/messages/${id}`, fetchOptions);
  };
  
  export const updateDislikeCount = (id) => {
    const messageToUpdate = applicationState.messages.find(
      (message) => message.id === id
    );
    messageToUpdate.dislikes++;
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageToUpdate),
    };
    return fetch(`${API}/messages/${id}`, fetchOptions);
  };
  