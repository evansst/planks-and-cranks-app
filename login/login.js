import * as $ from '../helpers/helper.js';

export function loginPage() {

    return `
      <div class="container text-center pt-5" style="width: 370px;">
        <form id="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
          <label for="inputUsername" class="sr-only">Username</label>
          <input type="username" name="username" id="inputUsername" class="form-control pt-2" placeholder="Username" required="">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" name="password" id="inputPassword" class="form-control pt-2" placeholder="Password" required="">
          <button id="login-button" class="btn btn-lg btn-primary btn-block pt-2" type="submit">Sign in</button>
        </form>
        <a class="pt-1" href="#/create_account">Create an Account</a>
      </div>
    `;
}

export function login(event) {
  $.setLoginSpinner();
  setTimeout(() => getUser(event), 1000);
}

function getUser(event) {
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



function checkResponse(response) {
  const { user, token, message } = response;
  
  if(message) {
    alert(message);
    document.getElementById('form-signin').reset();
    const $button = document.querySelector('button');
    $button.innerHTML = 'Sign In';
  } else {
    $.loggedIn(user)(token);
    location.href = '#/';
  }
}

