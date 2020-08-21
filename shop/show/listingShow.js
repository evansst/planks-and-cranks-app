import * as $ from '../../helpers/helper.js';
import carousel from './carousel.js';
import specs from './specs.js';


export default function listingShowPage(listingID) {

  fetch(`${$.listingsURL}/${listingID}`)
    .then($.parseJSON)
    .then(displayListing);

  $.main.innerHTML = '';
}

function displayListing(listing) {
  const images = listing.images.map(image => 'http://localhost:3000' + image.url);
  
  const $listingContainer = document.createElement('div');
  $listingContainer.className = 'row';

  $listingContainer.append(carousel(images));
  $listingContainer.append(specs(listing));

  $.main.append($listingContainer);
}



