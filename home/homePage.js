const $main = document.querySelector('main');

export default function homePage() {
  return `
    <div class="container-fluid">
      <div id="homeCarouselCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#homeCarouselCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#homeCarouselCaptions" data-slide-to="1"></li>
          <li data-target="#homeCarouselCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./photos/IMG_1695.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Where will your new bike take you?</h5>
              <a href="#/shop">Shop new mountain bikes</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./photos/IMG_2997.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Powder Magazine's skis of the year</h5>
              <a href="https://www.powder.com/gear-guide/the-11-best-skis-of-the-year-2020/" target="_blank">Read Online</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./photos/IMG_4920.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Ready to trade up?</h5>
              <a href="#/sell">Sell Your Skis</a>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#homeCarouselCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#homeCarouselCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  `;
}
