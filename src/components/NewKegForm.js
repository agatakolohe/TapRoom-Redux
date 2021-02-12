import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pintQuantity: event.target.pintQuantity.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <div class="form-group">
          <h4>Name: </h4>
          <input
            type="text"
            name="name"
            placeholder="C.R.E.A.M."
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Brand: </h4>
          <input
            type="text"
            name="brand"
            placeholder="Bru-Tang Clan"
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Price: </h4>
          <input
            type="number"
            name="price"
            placeholder="Dollar, dollar bill y'all"
            class="form-control"
          />
          <hr />
          ``
        </div>
        <div class="form-group">
          <h4>Alcohol by Volume(ABV): </h4>
          <input
            type="text"
            name="abv"
            placeholder="5.0%"
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Quantity by Pint: </h4>
          <input
            type="number"
            name="pintQuantity"
            placeholder="124 = full keg"
            class="form-control"
          />
          <hr />
        </div>
        <button class="btn btn success" type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
