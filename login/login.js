import * as $ from '../helpers/helper.js';

export function loginPage() {

    $.main.innerHTML =  `
      <div class="container text-center pt-5" style="width: 370px;">
        <form id="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
          <div class="form-group-row pt-2">
            <input type="username" name="username" id="inputUsername" class="form-control pt-2" placeholder="Username" required="">
          </div>
          <div class="form-group-row pt-2">
            <input type="password" name="password" id="inputPassword" class="form-control pt-2" placeholder="Password" required="">
          </div>
          <div class="form-group-row pt-2 pb-2">
            <button id="login-button" class="btn btn-lg btn-primary btn-block pt-2" type="submit">Sign in</button>
          </div>
        </form>
        <a class="pt-2" href="#/create_account">Create an Account</a>
      </div>
    `;
}

export function tryLogin(event) {
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
  } else {
    $.login(user)(token);
    $.closeModal();
  
  }
  document.querySelector('#submit-button').innerHTML = 'Sign In';
  document.getElementById('form-signin').reset();
}

