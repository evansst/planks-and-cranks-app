import * as $ from "../../helpers/helper.js";

export default function listingIndex() {
  
  fetch($.listingsURL)
    .then($.parseJSON)
    .then(displayCards);
  
  $.main.innerHTML = '';
}

function displayCards(listings) {
  const $cardDeck = document.createElement('div');
  $cardDeck.className = 'row row-cols-1 row-cols-md-3 p-4';

  listings
    .map(listing => toListingCard(listing)($cardDeck));

  $.main.append($cardDeck);  

}

function toListingCard(listing) {
  return function ($cardDeck) {
  
    const $listingCard = document.createElement('div');
    $cardDeck.append($listingCard);
  
    $listingCard.outerHTML = `
      <div class="col p-3">
        <div onclick="location.href='#/shop/${listing.id}';" style="cursor:pointer;" class="card h-100">
          <div class="card-body d-flex h-100">
            <img src="http://localhost:3000${listing.images[0].url}" class="w-100 align-self-center" alt="${listing.brand} - ${listing.model}">
          </div>  
          <div class="card-footer">
            <h5 class="card-title">${listing.brand} - ${listing.model}</h5>
            <p class="card-text">${listing.year}, ${listing.size}</p>
            <p class="card-text">${$.formatMoney(listing.price)} <br> <small class="text-muted"><del>${$.formatMoney(listing.msrp)}</del></small></p>
          </div>
        </div>
      </div>
    `;
  };
}