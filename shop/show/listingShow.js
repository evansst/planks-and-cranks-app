import * as $ from '../../helpers/helper.js';
import carousel from './carousel.js';
import specs from './specs.js';


export default function listingShowPage(listingID) {

  fetch(`${$.listingsURL}/${listingID}`)
    .then($.parseJSON)
    .then(displayListing);

  return '';
}

function displayListing(response) {
  const listing = response.listing;
  const images = response.image_urls;

  const $listingContainer = document.createElement('div');
  $listingContainer.className = 'row';

  $listingContainer.append(carousel(images));
  $listingContainer.append(specs(listing));

  $.main.append($listingContainer);
}



