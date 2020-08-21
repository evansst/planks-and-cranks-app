import * as $ from "./helpers/helper.js";
import homePage from "./home/homePage.js";
import shopPage from "./shop/shopPage.js";
import { loginPage } from "./login/login.js";
import createAccountPage from "./create_account/create_account.js";
import logout from "./logout/logout.js";
import createListing from "./sell/createListing.js";
import userProfilePage from "./profile/userProfile.js";
import { addSpecInput } from "./sell/createListing.js";
import { addToCart, emptyCart } from "./cart/cart.js";
import checkoutPage from "./checkout/checkout.js";

function routeChange(e) {
  const route = window.location.hash.split('#')[1] || '/';
  const path = route.split('/')[1];
  let ID;
  if(route.length > 2) { ID = route.split('/')[2]; }
  
  const page = routes[path];
  
  page
    ? page(ID)
    : error404();
  
  const user = $.loggedIn();
  if(user) $.setLogoutIcon(user.username);
}

const error404 = () => {
  $.main.innerHTML =  `
    <section>
      <h1>ERROR 404</h1>
      <h2>Uh, oh.  It looks like that page doesn't exist</h2>
    </section>
  `;
};

const routes = {
  '': homePage,
  'shop': shopPage,
  'create_account': createAccountPage,
  'logout': logout,
  'sell': createListing,
  'login': loginPage,
  'user_profile': userProfilePage,
  'checkout': checkoutPage,
};



window.addEventListener('load', routeChange);
window.addEventListener('hashchange', routeChange);

document.addEventListener('click', () => {
  if(event.target.id === 'add-spec-input') addSpecInput(event);
  if(event.target.id === 'add-to-cart') addToCart(event);
  if(event.target.id === 'empty-cart') emptyCart();
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  $.routeForm[event.target.id](event);
});

