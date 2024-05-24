var round = document.querySelector(".round")
var button = document.querySelector(".button")
let mode = "light"
let body = document.querySelector(".body")
let heading = document.querySelector("h1")
button.style.backgroundColor = "black"
round.style.backgroundColor = "white"


function move(){
    round.style.transform = "translateX(68px)"
    body.style.backgroundColor="black"
    button.style.backgroundColor = "grey"
    heading.style.color = "white"
    mode="dark"
}
function dark(){
    round.style.transform = "translateX(-1px)"
    body.style.backgroundColor = "white"
    button.style.backgroundColor = "black"
    heading.style.color = "black"
    mode="light";
} 

button.addEventListener("click", function(){
   if(mode==="light") move();
   else dark();
})



