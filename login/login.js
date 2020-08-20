import * as $ from '../helpers/helper.js';



export function loginPage() {

    return `
      <div class="container text-center" style="width: 370px;"=>
        <form id="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
          <label for="inputUsername" class="sr-only">Username</label>
          <input type="username" name="username" id="inputUsername" class="form-control" placeholder="Username" required="">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required="">
          <button id="login-button" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <a href="#/create_account">Create an Account</a>
      </div>
    `;
}

export function login(event) {
  setLoginSpinner();
  setTimeout(() => sendFetch(event), 1000);
}

function sendFetch(event) {
  const username = event.target.username.value;
  const password = event.target.password.value;

  fetch($.loginURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
    .then($.parseJSON)
    .then(checkResponse);
}

function setLoginSpinner() {
  const $button = document.getElementById('login-button');
  $button.innerHTML = `
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    `;
}

function checkResponse(response) {
  const { user, token, message } = response;
  
  if(message) {
    alert(message);
    document.getElementById('form-signin').reset();
    const $button = document.getElementById('login-button');
    $button.innerHTML = 'Sign In';
  } else {
    saveToken(token);
    saveUser(user);
    location.href='#/';
  }
}

function saveToken(token) {
  localStorage.setItem('token', token);
}

function saveUser(user) {
  localStorage.setItem('user_id', user.id);
  localStorage.setItem('username', user.username);
}
