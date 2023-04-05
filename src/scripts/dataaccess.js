const applicationState = {
    news: [],
    events: [],
    images: [], 
    messages: [],
    tasks: [],
    dadJokes: []
}
const API = "http://localhost:8088"
const dadAPI = "https://dad-jokes.p.rapidapi.com/random/joke"
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

//News
export const fetchNews = () => {
    return fetch(`${API}/news`)
    .then(response => response.json())
    .then(
        (newsStories) => {
            applicationState.news = newsStories
        }
    )
}

export const getNews = () => {
    return applicationState.news.map((singleNewsStory) => ({...singleNewsStory}))
};

export const sendNews = (userNewsAddition) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userNewsAddition)
    }

    return fetch(`${API}/news`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//events
export const fetchEvents = () => {
    return fetch(`${API}/events`)
        .then(response => response.json())
        .then(
            (upcomingEvents) => {
                applicationState.events = upcomingEvents
            }
        )
    }
    export const getEvents = () => {
        return applicationState.events.map(event => ({...event}))
    }
    //As the person is typing into the form fields in ServiceForm.js, they are changing the state of the application, but it is transient state because the person hasn't committed to the service request until the button is clicked. When the person clicks the button, our code takes the transient state and converts it into permanent state by storing it in the database.json file by using a fetch() call.
export const sendEvent = (userEvents) => {
    const fetchOptions = {
        //The POST method on any HTTP request means "Hey API!! I want you to create something new!"
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEvents)
    }
    const mainContainer = document.querySelector("#dashboard")
    return fetch(`${API}/events`, fetchOptions)   //location of said heist
                                                    //this changes the string into json, and json turns it into an object
        .then(response => response.json())          //dirty money => clean money (.json())
        .then(() => {                               //take clean money => do stuff with it
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const deleteEvent = (id) => {
    const mainContainer = document.querySelector("#dashboard")
    return fetch(`${API}/events/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const deleteNews = (id) => {
    return fetch(`${API}/news/${id}`, { method: "DELETE"})
}
//Images Start
export const fetchImages = () => {
    return fetch(`${API}/images`)
        .then(response => response.json())
        .then(
            (imageArray) => {
            applicationState.images = imageArray
    })
}

export const saveImage = (userImage) => {
    const saveOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userImage)
    }
        
    return fetch(`${API}/images`, saveOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteImage = (id) => {
    return fetch(`${API}/images/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getImages = () => {
    return applicationState.images.map(image => ({...image}))
}
//Images End

//Tasks API and Exports - KT
//task finished
export const taskComplete = (id) => {
const mainContainer = document.querySelector("#dashboard")
  fetch(`${API}/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        complete: true,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(() => mainContainer.dispatchEvent(new CustomEvent("stateChanged")));
}
//get the Tasks from API and convert it into usable data
export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
        .then(response => response.json())
        .then(
            (taskSubmission) => {
                applicationState.tasks = taskSubmission
            }
        )
}

//import the tasks from the database - KT
export const getTasks = () => {
    return applicationState.tasks.map(tasks => ({...tasks}))
}

//send tasks submitted to the database -KT
export const sendTasks= (userTask) => {
    const fetchOptions = {
      method: "POST",
      headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTask)
    }
    return fetch(`${API}/tasks`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

//delete Tasks
export const deleteTasks = (id) => {
    const mainContainer = document.querySelector("#dashboard")
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
    }

    export const fetchDadJokes = () => {
      return fetch(`${dadAPI}/dadJokes`)
        .then((response) => response.json())
        .then((serviceDadJokes) => {
          // Store the external state in application state
          applicationState.dadJokes = serviceDadJokes;
        });
    };
    
    export const getDadJokes = () => {
      return applicationState.dadJokes.map((dadJoke) => ({ ...dadJoke }));
    };
    
    export const sendDadJoke = (userServiceDadJoke) => {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userServiceDadJoke),
      }
    };