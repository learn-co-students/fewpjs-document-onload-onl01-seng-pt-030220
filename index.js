document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  contentLoaded()
});

let text = document.getElementById("text")  

function contentLoaded() {
  text.innerHTML = "This is really cool!"
}