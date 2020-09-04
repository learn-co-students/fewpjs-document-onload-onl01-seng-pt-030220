// Your code goes here
const text = document.querySelector("#text")

document.addEventListener("DOMContentLoaded", () => {
   text.innerHTML = "This is really cool!" 
})

console.log("This console.log() fires when index.js loads - before DOMCOntentLoaded is triggered.");