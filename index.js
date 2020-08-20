import homePage from "./home/homePage.js";
import shopPage from "./shop/shopPage.js";
import { loginPage } from "./login/login.js";
import * as $ from "./helpers/helper.js";




function routeChange(e) {
  const route = window.location.hash.split('#')[1] || '/';
  const path = route.split('/')[1];
  let listingID;

  if(route.length > 2) { listingID = route.split('/')[2]; }

  const page = routes[path];
  
  $.main.innerHTML = page
    ? page(listingID)
    : error404();
  
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
};

window.addEventListener('load', routeChange);
window.addEventListener('hashchange', routeChange);

document.addEventListener('submit', (event) => {
  event.preventDefault();
  $.routeForm[event.target.id](event);
});