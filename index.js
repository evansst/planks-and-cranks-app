import homePage from "./home/homePage.js";
import shopPage from "./shop/shopPage.js";

const baseURL = `http://localhost:3000`;
const $main = document.querySelector('main');

const routes = {
  '': homePage,
  'shop': shopPage,
  
  // '/sell': sellPage,
};

function routeChange(e) {
  const route = window.location.hash.split('#')[1] || '/';
  const path = route.split('/')[1];
  let listingID;

  if(route.length > 2) { listingID = route.split('/')[2]; }

  const page = routes[path];

  $main.innerHTML = page
    ? listingID
      ? page(listingID)
      : page()
    : error404();
}

function error404() {
  return (`
    <section>
      <h1>ERROR 404</h1>
      <h2>Uh, oh.  It looks like that page doesn't exist</h2>
    </section>
  `);
}


window.addEventListener('load', routeChange);
window.addEventListener('hashchange', routeChange);

export { $main, baseURL };