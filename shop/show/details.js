export default function description(listing) {
  const $container = document.createElement('div');
  $container.className = 'container';

  $container.innerHTML = `
  <div class="row justify-content-sm-center p-4">
    <h5>Details</h5>
  </div>
  <div class="row justify-content-sm-center">
    <div class="col-sm-9">
      ${listing.description}
    </div>
  </div>
  `;
  return $container;
} 