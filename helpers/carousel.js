let I = 0;

export function carousel(images) {
    const $carousel = createCarouselElement();
    const $carouselInner = document.createElement('div');
    const $ol = document.createElement('ol');
    $carouselInner.className = 'carousel-inner';
    $carousel.children[0].prepend($carouselInner);

    $ol.className = 'carousel-indicators';

    images
      .map(toCarouselItem)
      .forEach($image => appendToCarrousel($image)($carouselInner));

    const $thumbs = images.map(image => toCarouselThumb(image)($ol));

    $carousel.children[0].append($ol);

    return $carousel;
}

function createCarouselElement() {
  const $container = document.createElement('div');
  const $carousel = document.createElement('div');

  $container.className = 'd-inline-flex p-2';
  $container.append($carousel);
  $carousel.outerHTML = `
    <div id="imagesCarousel" class="carousel" data-ride="carousel">
      <a class="carousel-control-prev" href="#imagesCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#imagesCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    `;

  return $container;    
}

function toCarouselThumb(image) {
  const $li = document.createElement('li');

  
  
  return function($ol) {
    $ol.append($li);
    $li.outerHTML = `
    <li data-target="#carousel-thumb" data-slide-to="${I}">
      <img class="d-block w-100" src="${image}">
    </li>`;
    I++;
    return $li;
  };
}

function toCarouselItem(image) {
  const $carouselItem = document.createElement('div');
  $carouselItem.className = 'carousel-item';

  $carouselItem.innerHTML = `
    <img src="${image}" class="d-block img-fluid" style="max-width: 800px;">
    `;

  return $carouselItem;
}

function appendToCarrousel($image) {
  return function($carouselInner) {
    if($carouselInner.children.length === 0) $image.className = 'carousel-item active';
    $carouselInner.append($image);
  };
}

