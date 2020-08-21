import * as $ from '../helpers/helper.js';

export default function userProfilePage() {
  const user_id = localStorage.getItem('user_id');

  fetch(`${$.usersURL}/${user_id}`)
    .then($.parseJSON)
    .then(renderUserPage);
}

function renderUserPage(response) {
  console.log(response);
  const user = response.user;
  const listings = response.listings;
}