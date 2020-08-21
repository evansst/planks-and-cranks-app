import * as $ from '../helpers/helper.js';

export default function createListing() { 


    $.main.innerHTML =  `
    <div class="container text-left py-5">
      <form id="form-create-listing" class="text-right">
        <h1 class="h3 mb-3 font-weight-normal text-left">Sell your gear!</h1>
        <div class="form-group row">
          <label for="brandInput" class="col-sm-1">Brand</label>
          <input type="text" name="brand" id="brandInput" class="form-control col-sm-8" placeholder="ex. Evil, Yeti, Armada, or Salomon" required>
        </div>
        <div class="form-group row">
          <label for="modelInput" class="col-sm-1">Model</label>
          <input type="text" name="model" id="modelInput" class="form-control col-sm-8" placeholder="ex. Insurgent, SB140, JJ, or QST 100" required>
        </div>
        <div class="form-group row">
          <label for="yearInput" class="col-sm-1">Year</label>
          <select name="year" id="yearInput" class="form-control col-sm-3" required>
            <option selected>Choose...</option>
            <option value=2000>2000</option>
            <option value=2001>2001</option>
            <option value=2002>2002</option>
            <option value=2003>2003</option>
            <option value=2004>2004</option>
            <option value=2005>2005</option>
            <option value=2006>2006</option>
            <option value=2007>2007</option>
            <option value=2008>2008</option>
            <option value=2009>2009</option>
            <option value=2010>2010</option>
            <option value=2011>2011</option>
            <option value=2012>2012</option>
            <option value=2013>2013</option>
            <option value=2014>2014</option>
            <option value=2015>2015</option>
            <option value=2016>2016</option>
            <option value=2017>2017</option>
            <option value=2018>2018</option>
            <option value=2019>2019</option>
            <option value=2020>2020</option>
          </select>
          <label for="gearTypeInput" class="col-sm-2">Type</label>
          <select name="gear_type" id="gearTypeInput" class="form-control col-sm-3" required>
            <option selected>Choose...</option>
            <option value="Mountain Bike">Mountain Bike</option>
            <option value="Road Bike">Road Bike</option>
            <option value="Skis">Skis</option>
          </select>
        </div>
        <div class="form-group row">
          <label for="sizeInput" class="col-sm-1">Size</label>
          <input type="text" name="size" id="sizeInput" class="form-control col-sm-3" placeholder="ex. Small, Large, 165cm, or 188cm" required>
          <label for="conditionInput" class="col-sm-2">Condition</label>
          <select name="condition" id="conditionInput" class="form-control col-sm-3" required>
            <option selected>Choose...</option>
            <option value="New">New</option>
            <option value="Used - Excellent">Used - Excellent</option>
            <option value="Used - Good">Used - Good</option>
            <option value="Used - Okay">Used - Okay</option>
          </select>
        </div>
        <div class="form-group row">
          <label for="msrpInput" class="col-sm-1">MSRP</label>
          <div class="input-group  col-sm-3 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" name="msrp" id="msrpInput" class="form-control" placeholder="ex. $5,200 or $699" required>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>        
          <label for="priceInput" class="col-sm-2">Price</label>
          <div class="input-group col-sm-3 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" name="price" id="priceInput" class="form-control" placeholder="ex. $3,500 or $400" required>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-1">Images</div>
          <div class="custom-file col-sm-8">
            <input type="file" name="images" class="custom-file-input" id="imagesInput">
            <label class="custom-file-label text-left" for="imagesInput">Choose file</label>
            <small id="imagesHelp" class="form-text text-muted">You must upload at least one image</small>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-1"></div>
          <label for="descriptionInput" class="col-sm-8 text-center pt-4">Description</label>
        </div>
        <div class="form-group row">
          <div class="col-sm-1"></div>
          <textarea type="text" name="description" id="descriptionInput" class="form-control col-sm-8" style="height: 200px;"placeholder="ex. Serious powder skis! or"></textarea>
        </div>

        <div class="form-group-row">
          <div class="col-sm-8 offset-sm-1 text-center">
            <button id="submit-button" class="btn btn-lg btn-primary btn-block" type="submit">Sell It!</button>
          </div>
        </div>

      </form>
    </div>
    `;
}
  