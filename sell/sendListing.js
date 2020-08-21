import * as $ from '../helpers/helper.js';

export default function sendListing(event) {

  if (!$.loggedIn()) {
    alert('You must log in or create and account to sell!');
    document.querySelector('#login-link').click();
  } else {

    const images = event.target.imagesInput.files;

    const listing = {
        brand: event.target.brandInput.value,
        model: event.target.modelInput.value,
        year: event.target.yearInput.value,
        gear_type: event.target.gearTypeInput.value,
        size: event.target.sizeInput.value,
        condition: event.target.conditionInput.value,
        msrp: event.target.msrpInput.value,
        price: event.target.priceInput.value,
        description: event.target.descriptionInput.value,
        user_id: localStorage.getItem('user_id'), 
    };

    postListing(listing, images);
  }
}

function postListing(listing, images) {

  fetch($.listingsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(listing)
  })
    .then($.parseJSON)
    .then(response => postImages(response, images));
}

function postImages(listing, images) {
  let formData = new FormData();
  formData.append('images', {images});


  fetch(`${$.listingsURL}/${listing.id}`, {
    method: 'PATCH',
    body: formData
  })
    .then($.parseJSON)
    .then(console.log);
}