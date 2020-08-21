// Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
//   console.log("The DOM has loaded");
// });
 
// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );

/////////ORIGINAL/////////

// document.addEventListener("DOMContentLoaded", function() {
//   let newText = document.getElementById("text")
//   newText.textContent = "This is really cool!"
// })

//////////REFACTORED////////////
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("text").textContent = "This is really cool!"
})

///////////LEARN SOLUTION///////////////

// document.addEventListener( "DOMContentLoaded", function () {
//   updateDOM()
// } );


// function updateDOM() {
//   document.getElementById( "text" )
//     .innerHTML = "This is really cool!";
// }