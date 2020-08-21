import * as $ from '../helpers/helper.js';

export default function createAccountPage() {
 $.main.innerHTML = `
  <div class="container text-center pt-5" style="width: 370px;">
    <form id="form-create-account">
      <h1 class="h3 mb-3 font-weight-normal">Create an Account</h1>
      <div class="form-group">

        <input type="text" class="form-control" id="name" name="name" placeholder="Enter Name" required="">
      </div>
      <div class="form-group">

        <input type="text" class="form-control" id="username" name="username" placeholder="Enter Username" required="">
      </div>
      <div class="form-group">

        <input type="email" class="form-control" id="email" name="email_address" aria-describedby="emailHelp" placeholder="Enter email" required="">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <input type="password" name="password" class="form-control" id="password" placeholder="Password" require="">
      </div>
      <div class="form-group">
        <input type="password" name="confirm-password" class="form-control" id="confirm-password" placeholder="Confirm Password" require="">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  `;

  $.closeModal();

}

export function signUp(event) {
  $.setLoginSpinner();
  setTimeout(() => sendUser(event), 1000);
}

function sendUser(event) {
  const user = {
      username: event.target.username.value,
      name: event.target.name.value,
      email_address: event.target.email_address.value,
      password: event.target.password.value,
  };

  fetch($.usersURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
    .then($.parseJSON)
    .then(checkResponse);
}

function checkResponse(response) {
  const {user, token, error } = response;

  if(error) {
    alert(error);
    document.querySelector('#form-create-account').reset();
    const $button = document.querySelector('button');
    $button.innerHTML = 'Submit';
  } else {
    $.login(user)(token);
    location.href = '#/';
  }
}
