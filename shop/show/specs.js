import { formatMoney } from "../../helpers/helper.js";

export default function info(listing) {

  const $container = header(listing);

  $container.append(specs(listing.specs));

  return $container;
}

function header(listing) {
  const $container = document.createElement('div');
  $container.className = 'col-sm-4 pt-5';

  $container.innerHTML =`
    <div class="row justify-content-between">
      <h4>${listing.brand} - ${listing.model}</h3>
      <h9><em>${formatMoney(listing.price)}</em></h5>
    </div>
    <div class="row justify-content-start ">
      <h7>${listing.gear_type} ${listing.year}, ${listing.size}</h3>
    </div>
    <div class="row">
      <button type="button" class="btn btn-secondary btn-block m-4">Add to Cart</button>
    </div>
    <div class="row justify-content-between">
      <h5>Condition:</h5>
      <p><em>${listing.condition}</em></p>
    </div>
    <div class="row">
    </div>
    <div class="row">
      <h5>Specifications:</h5>
    </div>
    `;

  return $container;
}

function specs(specs) {
  const $specs = document.createElement('div');
  $specs.id = 'specifications';
  $specs.className = 'row';

  const $ul = document.createElement('ul');

  const keys = Object.keys(specs);
  const values = Object.values(specs);

  for(let i = 0; i < keys.length; i++) {
    const $li = document.createElement('li');
    $li.className = 'border-top';

    $li.innerHTML = `<p>${keys[i]}: ${values[i]}</p>`;

    $ul.append($li);
  }

  $specs.append($ul);
  return $specs;
}
