// Your code goes here

document.querySelector("p").textContent

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let el = document.getElementById("text")
    el.textContent = "This is really cool!"
});