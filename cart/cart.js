

export function addToCart(event) {
  const listing_id = event.target.attributes.listing_id.value;
  console.log(listing_id);
  const cart = localStorage.cart;
  localStorage.setItem('cart', cart + listing_id + ',');

  document.querySelector('#add-to-cart').textContent = 'Added to Cart!';
}

export function emptyCart() {
  localStorage.setItem('cart', '');
  const $ul = document.querySelector('#cart-list');
  if($ul) $ul.innerHTML = '';
}