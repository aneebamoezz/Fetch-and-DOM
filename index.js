
/* FETCH RANDOM DOG */


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("img-container").innerHTML = `
//             <img src="${data.message}" />
//         `
//     })


/* FETCH RANDOM SCRIMBA TEXT */


// fetch("https://apis.scrimba.com/bored/api/activity")
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     document.getElementById("text-container").innerHTML = `
//     <p class="container">${data.activity}</p>`
// })

/* BORED - BOT JAVASCRIPT */

/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/ 

document.getElementById("get-act").addEventListener("click", function(){

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then((data) => {
        document.getElementById("act").textContent = data.activity
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
        document.body.classList.add("fun")
    })
})