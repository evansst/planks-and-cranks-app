import * as $ from "./helpers/helper.js";
import homePage from "./home/homePage.js";
import shopPage from "./shop/shopPage.js";
import { loginPage } from "./login/login.js";
import createAccountPage from "./create_account/create_account.js";
import logout from "./logout/logout.js";


function routeChange(e) {
  const route = window.location.hash.split('#')[1] || '/';
  const path = route.split('/')[1];
  let ID;
  if(route.length > 2) { ID = route.split('/')[2]; }
  
  const page = routes[path];
  
  $.main.innerHTML = page
    ? page(ID)
    : error404();
  
  const user = loggedIn();
  if(user) $.setLogoutIcon(user.username);
}

const error404 = () => {
  return `
    <section>
      <h1>ERROR 404</h1>
      <h2>Uh, oh.  It looks like that page doesn't exist</h2>
    </section>
  `;
};

const routes = {
  '': homePage,
  'shop': shopPage,
  'login': loginPage,
  'create_account': createAccountPage,
  'logout': logout,
};

function loggedIn() {
  return (localStorage.getItem('user_id'))
    ? {
      user_id: localStorage.getItem('user_id'),
      username: localStorage.getItem('username'),
      token: localStorage.getItem('token'),    
    }
    : false;
}

window.addEventListener('load', routeChange);
window.addEventListener('hashchange', routeChange);

document.addEventListener('submit', (event) => {
  event.preventDefault();
  $.routeForm[event.target.id](event);
});