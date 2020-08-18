import * as $ from '../helpers/helper.js';
import { carousel } from '../helpers/carousel.js';

export default function listingShowPage(listingID) {

  fetch(`${$.listingsURL}/${listingID}`)
    .then($.parseJSON)
    .then(displayListing);

  return '';
}

function displayListing(response) {
  const listing = response.listing;
  const images = response.image_urls;

  $.main.append(carousel(images));

}



