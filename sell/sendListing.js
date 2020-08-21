import * as $ from '../helpers/helper.js';

export default function sendListing(event) {

  if (!$.loggedIn()) {
    alert('You must log in or create and account to sell your stuff!');
    document.querySelector('#login-link').click();
  } else {
    
    const newListing = filterForm(event.target);    
    
    let formData = new FormData(newListing);
    postListing(formData);
  }
}

function filterForm(form) {
  const $specKeys = document.querySelectorAll('#specKeyInput');
  const $specValues = document.querySelectorAll('#specValueInput');

  for(let i = 0; i < $specKeys.length; i++) {
    $specKeys[i].name = `specs[${$specKeys[i].value}]`;
    $specKeys[i].value = $specValues[i].value;
  }

  return form;
}

function postListing(formData) {

  fetch($.listingsURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
    body: formData
  })
    .then($.parseJSON)
    .then(response => window.location.hash = `/shop/${response.id}`);
}
