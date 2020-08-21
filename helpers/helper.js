
import { tryLogin } from "../login/login.js";
import { signUp } from "../create_account/create_account.js";
import sendListing from "../sell/sendListing.js";

export const baseURL = `http://localhost:3000`;
export const listingsURL = `${baseURL}/listings`;
export const loginURL = `${baseURL}/login`;
export const usersURL = `${baseURL}/users`;
export const main = document.querySelector('main');

export function formatMoney(number, decPlaces, decSep, thouSep) {
  decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
  decSep = typeof decSep === "undefined" ? "." : decSep;
  thouSep = typeof thouSep === "undefined" ? "," : thouSep;
  var sign = number < 0 ? "-" : "";
  var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
  var j = (j = i.length) > 3 ? j % 3 : 0;

  return '$' + sign +
    (j ? i.substr(0, j) + thouSep : "") +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
    (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
  }

export function parseJSON(response) {
  return response.json();
}

export const routeForm = {
  'form-signin': tryLogin,
  'form-create-account': signUp,
  'form-create-listing': sendListing,
};

export function setLoginSpinner() {
  const $button = document.querySelector('#login-button');
  $button.innerHTML = `
    <div class="spinner-border" role="status">
    </div>
    `;
}

export function setLoginButton() {
  document.querySelector('#login-button').innerHTML = `Log In`;
}
export function loggedIn() {
  return (localStorage.getItem('user_id'))
    ? {
      user_id: localStorage.getItem('user_id'),
      username: localStorage.getItem('username'),
      token: localStorage.getItem('token'),    
    }
    : false;
}

export function login(user) {
  saveUser(user);
  setLogoutIcon(user.username);

  return (token) => saveToken(token);
}

function saveUser(user) {
  localStorage.setItem('username', user.username);
  localStorage.setItem('user_id', user.id);
  localStorage.setItem('name', user.name);
}

function saveToken(token) {
  localStorage.setItem('token', token);
}

export function setLogoutIcon(username) {
  document.querySelector('h6#username').innerHTML = `<a href="#/user_profile"> ${username}</a>`;
  document.querySelector('a#login-link').outerHTML =`
    <a id='login-link' class="nav-link" data-toggle="modal" data-target="#logoutModal">
      <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-dash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </a>`;
}


export function closeModal() {
  document.querySelectorAll('.close').forEach( closeButton => closeButton.click());
}

