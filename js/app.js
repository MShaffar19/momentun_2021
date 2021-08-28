const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greenting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greenting.innerText = "Hello " + username;
    greenting.innerText =`Hello ${username}`;
    greenting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);