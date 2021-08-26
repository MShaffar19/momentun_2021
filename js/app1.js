const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    h1.style.color="blue";
}

function handleMouseEnter(){
   h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handlerWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handlerWindowCopy(){
    alert("copier!");
}

function handlerWindowOffListener(){
    alert("SOS no WIFI");
}

function handleWindoOnLine(){
    alert("ALL GOOD")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handlerWindowResize);  
window.addEventListener("copy", handlerWindowCopy);
window.addEventListener("offline", handlerWindowOffListener);
window.addEventListener("online", handleWindoOnLine)