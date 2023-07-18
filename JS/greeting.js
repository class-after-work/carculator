const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const KEYNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(KEYNAME, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}! Nice to meet you.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(KEYNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // show the form
} else {
  paintGreeting(savedUsername);
}
// show the greetings
