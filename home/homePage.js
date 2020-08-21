import * as $ from '../helpers/helper.js';

export default function homePage() {
  $.main.innerHTML = `
    <div class="container-fluid p-0">
      <div id="carouselCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselCaptions" data-slide-to="1"></li>
          <li data-target="#carouselCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./photos/IMG_1695.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Where will your new bike take you?</h5>
              <a href="#/shop">Shop new mountain bikes</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./photos/IMG_2997.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Powder Magazine's skis of the year</h5>
              <a href="https://www.powder.com/gear-guide/the-11-best-skis-of-the-year-2020/" target="_blank">Read Online</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./photos/IMG_4920.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Ready to trade up?</h5>
              <a href="#/sell">Sell Your Skis</a>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  `;
}

