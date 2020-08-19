import { formatMoney } from "../../helpers/helper.js";

export default function specs(listing) {
  console.log(listing);




  return header(listing);
}

function header(listing) {
  const $container = document.createElement('div');
  $container.className = 'col-4';

  $container.innerHTML =`
    <div class="row justify-content-between border-bottom border-dark">
      <h4>${listing.brand} - ${listing.model}</h3>
      <h9><em>${formatMoney(listing.price)}</em></h5>
    </div>
    <div class="row justify-content-start ">
      <h7>${listing.year}, ${listing.size}</h3>
    </div>
    <div class="row">
      <button type="button" class="btn btn-secondary btn-block">Add to Cart</button>
    </div>
    <div class="row">
      <h5 class="border-bottom border-dark">Condition:</h5>
    </div>
    <div class="row">
      <p>${listing.condition}</p>
    </div>
    <div class="row">
      <h5 class="border-bottom border-dark">Specifications:</h5>
    </div>
    <div id="specifications" class="row">

    </div>`
    ;

  return $container;
}
