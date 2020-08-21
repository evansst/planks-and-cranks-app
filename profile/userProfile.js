import * as $ from '../helpers/helper.js';


export default function userProfilePage() {
  const user_id = localStorage.user_id;

  fetch(`${$.usersURL}/${user_id}`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`,
    }
  })
    .then($.parseJSON)
    .then(renderUserPage);
}

function renderUserPage(response) {
  const user = response.user;
  const listings = response.listings;

  const $container = document.createElement('div');
  $container.className = 'row';

  
  const $rightColumn = document.createElement('div');
  $rightColumn.className = 'col-8 pr-5 justify-content-center';
  $rightColumn.append(cardDeck(listings));
  
  $container.innerHTML += userInfo(user);
  $container.append($rightColumn);

  $.main.innerHTML = $container.outerHTML;
}

function userInfo(user) {
  return `
    <div id="user-info" class="col-4 p-5 justify-content-center">
      <div class="row p-3 justify-content-center">
        <img src="http://localhost:3000/${user.avatar.url}" class="rounded img-thumbnail" style="max-height: 250px;">
      </div>
      <div class="row px-3 justify-content-center">
        <h5>${user.name}</h5>
      </div>
      <div class="row px-3 justify-content-center">
        ${user.email_address}
      </div>
      <div class="row px-3 justify-content-center">
        ${user.username}
      </div>
      <form class="row px-3 justify-content-center">
        <input class="btn btn-primary btn-sm" type="submit" value="Edit"></input>
      </form>  
    </div>
    `;
}

function cardDeck(listings) {
  const $cardDeck = document.createElement('div');
  $cardDeck.className = 'row row-cols-1 row-cols-md-3 p-5';

  listings
    .map(toListingCard)
    .map($listingCard => {
      $cardDeck.append($listingCard);
    });

  return $cardDeck;
}

function toListingCard(listing) {
  const $listingCard = document.createElement('div');
  $listingCard.className = 'col-3 p-3';
  $listingCard.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex h-100">
          <img onclick="location.href='#/shop/${listing.id}';" style="cursor:pointer;" src="http://localhost:3000${listing.images[0].url}" class="w-100 align-self-center" alt="${listing.brand} - ${listing.model}">
        </div>  
        <div class="card-footer">
          <h5  onclick="location.href='#/shop/${listing.id}';" style="cursor:pointer;" class="card-title">${listing.brand} - ${listing.model}</h5>
          <p class="card-text">${listing.year}, ${listing.size}</p>
          <p class="card-text">${$.formatMoney(listing.price)} <br> <small class="text-muted"><del>${$.formatMoney(listing.msrp)}</del></small></p>
          <div class="row justify-content-around">
            <form listing_id="${listing.id}" id="delete-listing"><input class="btn-sm btn-danger" type="submit" value="Remove"></input></form>
          </div>
        </div>
      </div>
  `;
  return $listingCard;
}

export function deleteListing(event) {
  const listing_id = event.target.attributes.listing_id.value;

  event.path[4].remove();

  alert('Your listing was removed');

  fetch(`${$.listingsURL}/${listing_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`,
    }
  });
  

}