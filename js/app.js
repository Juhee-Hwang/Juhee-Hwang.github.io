const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // shoe the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}


// const loginButton = document.querySelector("#login-form button");
// function onLoginBtnClick() {
  //   const username = loginInput.value;
  //   if(username === "") {
//     alert("Please write your name");
//   } else if(username.length > 15){
//     alert("Your name is too long.")
//   }
// }
// loginButton.addEventListener("click", onLoginBtnClick);

// const link = document.querySelector("a");
// function handleLinkClick(event){
  //   event.preventDefault();
  // }
// link.addEventListener("click",handleLinkClick)