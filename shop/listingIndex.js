import * as $ from "../helpers/helper.js";

const listingsURL = `${$.baseURL}/listings`;

const $cardDeck = document.createElement('div');
$cardDeck.className = 'row row-cols-1 row-cols-md-3';

export default function listingIndex() {

  fetch(listingsURL)
    .then($.parseJSON)
    .then(displayCards);

    return '';
}

function displayCards(response) {
  const listings = response.listings;

  listings
    .map(toListingCard);

  $.main.append($cardDeck);  

}

function toListingCard(listing) {
  const image_urls = listing.image_urls;
  listing = listing.listing;

  const $listingCard = document.createElement('div');
  $cardDeck.append($listingCard);

  $listingCard.outerHTML = `
    <div class="col mb-4">
      <div onclick="location.href='#/shop/${listing.id}';" style="cursor:pointer;" class="card h-100">
        <div class="card-body d-flex h-100">
          <img src="${image_urls[0]}" class="w-100 align-self-center" alt="${listing.brand} - ${listing.model}">
        </div>  
        <div class="card-footer">
          <h5 class="card-title">${listing.brand} - ${listing.model}</h5>
          <p class="card-text">${listing.year}</p>
          <p class="card-text">${$.formatMoney(listing.price)} <br> <small><del>${$.formatMoney(listing.msrp)}</del></small></p>
        </div>
      </div>
    </div>
  `;
}