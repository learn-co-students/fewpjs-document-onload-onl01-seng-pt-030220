// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    const input = document.getElementById("text")
    input.innerHTML = "This is really cool!";
  });
   

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );


function meow(){
  const input = document.getElementById("text")
  input.innerHTML = "This is really cool!"
};